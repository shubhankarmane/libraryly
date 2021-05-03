## **Library Management System Backend**

To run this project locally, make a clone of this repo, create a local MySQL database and set the following environment variables

1.  JWT_SECRET
2.  NOE_ENV
3.  PROD_DATABASE_URL
4.  DEV_DATABASE_URL

This project has been deployed at: https://shrouded-headland-49538.herokuapp.com/

To get send requests to the server, you can use httpie https://httpie.io/

Begin by sending a request to register a user:

    echo '{"username": "john","password": "john"}' | http POST http://localhost:3000/api/users/register

**Endpoints**

User Login

    echo '{"username": "john", "password": "john"}' | http POST http://localhost:3000/api/users/authenticate

Add new customer

    echo '{ "firstname": "Shubhankar", "lastname": "Mane", "email": "manes@gmail.com", "phone": "8745690145" }' | http POST http://localhost:3000/api/customers/register "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

Get customer details

    http GET http://localhost:3000/api/customers/40 "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

Update customer details

    echo '{ "firstname": "Shubhankar", "lastname": "Mane", "email": "maneshubhankar@gmail.com", "phone": "8745690145" }' | http PUT http://localhost:3000/api/customers/update/4 "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

Add new book

    echo '{"title": "Book Awesome","stock": 7,"isbn": "9780140817744","imageurl": "","pages": 352,"authorid": 2,"genreid": 6}' | http POST http://localhost:3000/api/books/add "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

View all books

    http GET http://localhost:3000/api/books/view/all "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

View a single book

    http GET http://localhost:3000/api/books/view/2 "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

Update book details

    echo '{"title": "Book Three","stock": 7,"isbn": "9780140817744","imageurl": "","pages": 352,"authorid": 2,"genreid": 6}' | http PUT http://localhost:3000/api/books/update/3 "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

Create genre

    echo '{"name": "Fantasy"}' | http POST http://localhost:3000/api/genres/add/ "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

Create author

    echo '{"name": "Shubhankar Mane"}' | http POST http://localhost:3000/api/authors/add/ "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

Create rental

    echo '{"bookid": 1, "customerid":1}' | http POST http://localhost:3000/api/rentals/new "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

Return rental

    echo '{"bookid": 1, "customerid":1}' | http PUT http://localhost:3000/api/rentals/return "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

View open rentals

    http GET http://localhost:3000/api/rentals/view/all/open "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

View closed rentals

    http GET http://localhost:3000/api/rentals/view/all/closed "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

View a single rental

    http GET http://localhost:3000/api/rentals/view/10 "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"

Process subscription for a customer

    http PUT http://localhost:3000/api/subscription/payment/subscription/1 "Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE2MTk3ODc1ODEsImV4cCI6MTYyMDM5MjM4MX0.1hUUKtajZw0Qxmpi5_HTaKzj_cwseftM9-AaxiVG3cQ"
