 

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

## I did a video showing the project, u can check out <a href="https://www.youtube.com/watch?v=V8j7K7SpuIg">Here</a>

### About
  <p>
   On the homepage, I fetched the data from MongoDB. You can choose hotels by city, date range and select some other options. When clicked on search all   related hotels are shown. You can also filter hotels by maximum and minimum price. On the page of the chosen hotel, there is information about it as well   as the total value according to the selected day range and number of rooms chosen. When clicking on "Reserve or book now" if the user is not logged in,     he will be directed to the login page. From there it will be possible to see the available room options and select it. If another user chooses the same     range of days and the same hotel as the previous user, this will show “room unavailable”.
  </p>

 ## DOCUMENTATION 

* Clone this repo with `git@github.com:eulazzo/reserve.git`;
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
      
* ### Get Hotel Rooms
  * Method: GET
  * Path: `api/hotels/room/6297d8592e59530bc97e043f`
   * Output:  
     ```
       [
           {
            "_id": "62995221941e80ce6c37425e",
            "title": "2 bed room 5 toilet",
            "price": 69,
            "maxPeople": 3,
            "desc": "lorem Ipsulum",
            "roomNumbers": [
             {
              "number": 102,
              "unavailableDates": [
               "2022-06-03T00:13:21.019Z",
               "2022-06-03T00:13:21.019Z",
               "2022-06-03T01:05:32.457Z",
               "2022-06-03T00:13:21.019Z",
               "2022-06-03T00:13:21.019Z"
              ],
              "_id": "62995221941e80ce6c37425f"
             },
             {
              "unavailableDates": [
               "2022-06-02T03:00:00.000Z",
               "2022-06-03T03:00:00.000Z",
               "2022-06-04T03:00:00.000Z",
               "2022-06-05T03:00:00.000Z",
               "2022-06-06T03:00:00.000Z",
               "2022-06-07T03:00:00.000Z",
               "2022-06-08T03:00:00.000Z",
               "2022-06-09T03:00:00.000Z",
               "2022-06-10T03:00:00.000Z",
               "2022-06-03T01:05:32.457Z"
              ],
              "_id": "62995221941e80ce6c374260"
             }
            ],
            "createdAt": "2022-06-03T00:13:21.019Z",
            "updatedAt": "2022-08-05T17:07:43.633Z",
            "__v": 0
           },
           {
            "_id": "6299523d941e80ce6c374263",
            "title": "3 bed room 3 toilet",
            "price": 400,
            "maxPeople": 3,
            "desc": "lorem Ipsulum ",
            "roomNumbers": [
             {
              "number": 102,
              "unavailableDates": [
               "2022-06-03T01:05:32.457Z"
              ],
              "_id": "6299523d941e80ce6c374264"
             },
             {
              "unavailableDates": [
               "2022-06-03T01:05:32.457Z"
              ],
              "_id": "6299523d941e80ce6c374265"
             }
            ],
            "createdAt": "2022-06-03T00:13:49.806Z",
            "updatedAt": "2022-06-03T01:05:50.818Z",
            "__v": 0
           }
       ]
     ```
    
* ### Delete Room
  * Method: DELETE
  * Path: `api/rooms/6297bd02e23f8c503bb81b60/6296759fd404431013ddf68b`
  * Output:  
     ```
       "Room deleted"
     ```
* ### Add Date
  * Method: PUT
  * Path: `api/rooms/availability/62995221941e80ce6c37425f`
  * input:
    ```
      {"dates":["2022-06-03T00:13:21.019Z","2022-06-03T00:13:21.019Z"]}
    ```
  * Output:  
     ```
      "updated Room"
     ```
## Technologies

<table>
   
  <thead>
    <th>Back-end</th>
    <th>Front-end</th>
  </thead>
   
  <tbody>
    <tr>
      <td>Node.js</td>
      <td>ReactJS</td>
    </tr>
     <tr>
      <td>JWT</td>
      <td></td>
    </tr>
    <tr>
      <td>ExpressJs</td>
      <td>CSS & SCSS</td>
    </tr>
    <tr>
      <td>Axios</td>
      <td>Axios</td>
    </tr>
    <tr>
      <td></td>
      <td>React Hooks</td>
    </tr>
    <tr>
      <td>Cors</td>
      <td></td>
    </tr>
  </tbody>
  
</table>

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

  
