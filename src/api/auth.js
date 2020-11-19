const bcrypt = require('bcrypt');
const { Router } = require('express');
const { newToken } = require('../utils/auth.js');
const { sequelize, Sequelize } = require('../../models');

// router init
const router = Router();

// router
router.post('/login', async (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;

        const user = await sequelize.query(
            `SELECT * FROM doctor 
                        WHERE userid = $username`,
            {
                bind: { username: `${username}` },
                type: Sequelize.QueryTypes.SELECT,
            }
        );

        if (!user) {
            return res.status(401).send('Authentication failed. User not found.');
        }
        console.log('user', user);
        bcrypt.compare(password, user[0].password, (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).send('Internal Server Error');
            }
            if (result) {
                const token = newToken(user);
                
                return res.status(200).json({
                    success: true,
                    username: username,
                    userid: user[0].dtid,
                    message: 'Login Success',
                    token: token,
                });
            } else {
                return res.status(401).json('Authentication failed. Wrong password.');
            }
        });
    } catch (error) {
        res.status(400).json({ message: 'sth wrong', error});
        throw error;
    }
});

module.exports = router;
