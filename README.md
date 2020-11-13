# Back-End

Back-end server of the FAST project, where patients can rehabiltate their upper limbs using embeded devices with VR contents. 

### API
REST API served by the server.

| Method | URI | Description|
| ------ | ------ | ------ |
| GET | /patients | Selects information of all patients registred  |
| GET | /patients/{ptname} | Selects information of patients who has a certain name |
| GET | /pcontents/{ptid} | Selects all rehabilitation records played by the patient |
| GET | /pcontents/{ptid} | Selects all rehabilitation records played by the patient |
| POST | /tresults/ | Selects measured data of the clikced rehabilitation record by the patient |
| POST | /tresults/tkid | Selects measured data of certain task for history graph |

### Tech
   
* [node.js](https://nodejs.org) - evented I/O for the backend
* [Express](https://expressjs.com) - fast node.js network app framework
* [MySQL](https://mysql.com) - The world's most popular open source database
* [Sequelize](https://sequelize.org/) - a promise-based Node.js ORM


### Project setup

Install the dependencies and devDependencies and start the server.

```sh
$ cd back-end
$ npm install
$ npm start
```