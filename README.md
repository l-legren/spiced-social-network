# spiced-social-network
A principle of Social Network built on React

# Social Network

### Important. Please find the files in leret branch

## What's this?

This Social Network was built during my attendance to the Spiced Academy's Web Development Bootcamp in Berlin. 

User can sign up, log in and reset password with AWS.
Once registered the user can add a bio to its homepage, make friend requests, accept or ignore these, as well as see the list of friends or requests. There is also implemented an incremental search feature where the user can find users whose name match the input.
Another feature is the chatroom where users can chat real time with each other as well as see who is online with the power of Socket IO.

## Why this?

First project built with React.js. Approach to making of user interfaces with React's template language. Registration and Login, as well as profile Editor was done using class components. Rest of the project was done with React Hooks, a feature implemented with React 16.8. 
Redux was used as general state container of the app running on the server and the client side. 

## Technologies I used

- HTML5, CSS3
- File Storing with AWS S3
- Password resetting with AWS SES
- React.js
- Redux
- Node/Express
- PSQL

## Set Up

For security reasons it is required to own an AWS account and create a S3 Bucket and pass AWS credentials so the uploading middleware works. Same for Simple Email Service
I addition to the AWS set up it's necessary to create a new PSQL Database and edit the ```db.js``` file that can be found in this repo.
To make it run just clone the repository, install all the dependencies with ```npm install``` and from the local directory in the terminal run the server with ```npm run``` and the client with ```npm run dev:client```.

## Screenshots
