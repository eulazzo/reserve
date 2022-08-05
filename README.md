 

<h1 align="center">
  Reserve 
</h1>
  
 

<p align="center" >
  <a href="#about"> About </a> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
  <a href="#getting-started">Getting started </a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#techs">Techs</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>


<p align="center">
  <a href="https://github.com/eulazzo" target="_blank">
    <img src="https://img.shields.io/static/v1?label=author&message=eulazzo&color=1877f2&labelColor=008000" alt="Github"> 
  </a>
    <img src="https://img.shields.io/github/stars/eulazzo/Sigma?color=1877f2&labelColor=008000" alt="Stars">
  <img src="https://img.shields.io/github/last-commit/eulazzo/Sigma?color=1877f2&labelColor=008000" alt="Commits">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=1877f2&labelColor=008000" alt="License">
</p>

![Implly CHAT GIF]( https://res.cloudinary.com/toppo/image/upload/v1659716824/uploads/aaBOOKING_tkqrge.png)
 
 </br>
 
<h2>Admin Painel</h2>
 
![Implly CHAT GIF]( https://res.cloudinary.com/toppo/image/upload/v1659716814/uploads/aaaBokking_m53qkh.png)
</br>

 ## DOCUMENTATION 

* Clone this repo;
* run `npm install` to add all depedencies;
* Create an `.env` inside the `api` folder and fill in all the necessary keys:
  ```
   MONGO_URL= 
   JWT_SECRET_TOKEN= 
   CLIENT_URL=
  ```

* run `npm run start` to start the server

 ## Endpoints

* ### signUp
  * Method: POST
  * Path: `api/auth/register`
  * input:
    ```
      {
       "username":"you_rusername",
       "password":"123456",
       "email":"email@gmail.com",
       "phone":"123456",
       "city":"Bocaiuva",
       "country":"Brazil",
       "img":"https://thispersondoesnotexist.com/image"
     }
     
    ``` 
   * Output:
     ```
       User has been created!
     ```

* ### signIn
  * Method: POST
  * Path: `/user/login`
  * input:
    ```
      {
       "username":"admin_painel",
       "password":"123456"
      }
     
    ``` 
   * Output:
     ```
       {
          "details": {
           "_id": "62ed29214bed0e658a03159c",
           "username": "your_username",
           "email": "email@gmail.com",
           "country": "Brazil",
           "img": "https://thispersondoesnotexist.com/image",
           "city": "Bocaiuva",
           "phone": "123456",
           "createdAt": "2022-08-05T14:28:49.988Z",
           "updatedAt": "2022-08-05T14:28:49.988Z",
           "__v": 0
          },
          "isAdmin": true
         }
     ```
   
  * ### Create A Hotel
  * Method: POST
  * Path: `/api/hotels`
  * input:
    ```
    {
      "name":"Hotel the Crown",
      "type":"hotel",
      "city":"London	",
      "address":"Somewhere",
      "distance":"50",
      "title":"Best hotel in the city",
      "desc":"Best hotel for a romance couple",
      "cheapestPrice":340
     }
     
    ``` 
   * Output:  
     ```
       {
         "name": "Hotel Hotheart",
         "type": "hotel",
         "city": "London",
         "address": "Somewhere",
         "distance": "50",
         "photos": [],
         "title": "Best hotel in the city",
         "desc": "Best hotel for a romance couple",
         "rooms": [],
         "cheapestPrice": 340,
         "featured": false,
         "_id": "6297d8752e59530bc97e0443",
         "__v": 0
       }
     ```
     
     
  * ### Get Hotel Types
  * Method: GET
  * Path: `api/hotels/countByCity?cities=Berlin,Madrid,London` 
   * Output:  
     ```
      [
        0,
        4,
        0
      ]
     ```
     
  * ### Create A Room
  * Method: POST
  * Path: `api/rooms/6297d8592e59530bc97e043f `
  * input:
    ```
     {
       "title":"3 bed room 3 toilet",
       "price":400,
       "desc":"luxury",
        "maxPeople":3,
       "desc":"lorem Ipsulum",
       "roomNumbers":[{"number":102},{"numer":234}]
      }
     
    ``` 
   * Output:  
     ```
      {
        "title": "3 bed room 3 toilet",
        "price": 400,
        "maxPeople": 3,
        "desc": "lorem Ipsulum",
        "roomNumbers": [
         {
          "number": 102,
          "unavailableDates": [],
          "_id": "6299523d941e80ce6c374264"
         },
         {
          "unavailableDates": [],
          "_id": "6299523d941e80ce6c374265"
         }
        ],
        "_id": "6299523d941e80ce6c374263",
        "createdAt": "2022-06-03T00:13:49.806Z",
        "updatedAt": "2022-06-03T00:13:49.806Z",
        "__v": 0
       }
     ```
      
