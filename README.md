# Web Development Forum

The Web Development Forum is an online platform dedicated to fostering collaboration, knowledge sharing, and discussions among web developers of all skill levels. The goal of the project is to create a vibrant community where developers can connect, learn from each other, and stay updated with the latest trends and technologies in web development. 
Users can create topics, participate in discussions, comment on posts, provide answers to questions, and share their knowledge and experiences.

Web Development Forum is a project based on MEAN stack (MongoDB, Express.js, AngularJS, Node.js). This implementation contains modular code and a component-based application structure using Angular 1.5 and ES6. It uses Gulp and a handful of Gulp plugins to perform various tasks. The project has a responsive layout.

## Getting Started

### Required preconditions

* [install](https://howtonode.org/how-to-install-nodejs) Node.js
* install Gulp
* install MongoDB version 3.4.6

### Deployement steps

* clone GIT repository
* install dependencies
    ```
    $ npm install
    ```
* run MongoDB server demon `mongod`

* run gulp
    ```
    $ gulp
    ```
* run web-server
    ```
    $ npm run dev
    ```

* in browser go to the address [http://localhost:3000](http://localhost:3000)

## Usage overview

Web Development Forum is hierarchical in structure: it contains a number of topics, each of which has threads. Users have to register with the forum and then subsequently log in in order to post messages (answers) within the certain thread. Registered users can also add likes or dislikes, edit their answers, choose the best answer, manage their profiles etc. Web Development Forum has an administrator who has extended privileges: manage other registered users, forum topics and threads. Unregistered users can view the contents of the forum. 

There are predefined data including the administrator, registered users, topics, answers etc. in the current deployment.

* The administrator account has following credentials:
  * email: `admin@forum.ua`
  * password: `Password1`
  
* All the registered users have the same password:
  * `Secret1`

## Screenshots of the project

![Board index, screen resolution 600x480 px](screenshots/01.jpg)
![Thread, screen resolution 600x480 px](screenshots/02.jpg)
![Edit thread, screen resolution 1366x768 px](screenshots/03.jpg)
![Sign up, screen resolution 600x480 px](screenshots/04.jpg)
![Member list, screen resolution 1366x768 px](screenshots/05.jpg)
![Admin profile, screen resolution 400x480 px](screenshots/06.jpg)
![Topic, screen resolution 320x480 px](screenshots/07.jpg)
