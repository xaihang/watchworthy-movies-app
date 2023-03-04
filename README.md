# MOVIE SAGA PROJECT 

## Description

The movie management application is a web-based system that allows users to manage a list of movies. The application has two main views: the Home/List Page and the Details Page.

The Home/List Page displays all of the movies in the database. When a movie poster is clicked, the user is brought to the Details Page for that movie. The Details Page shows all details for the selected movie, including title, description, and image, as well as all genres associated with the movie. The Details Page also has a Back to List button that allows the user to return to the Home/List Page.

The application also has several stretch goals, including an Add Movie Form that allows users to add new movies to the database, a Refresh on Details Page feature that allows the application to maintain the details page on refresh, and an Edit Page that allows users to edit the title and description of a movie.

**NOTE:** 
 [The Open Movie Database API](https://www.omdbapi.com/): has comprehensive documentation that is easy to follow. The API supports a variety of endpoints, including movie search and information retrieval. The API also supports several data formats, including JSON and XML.

---
## **TABLE OF CONTENT:**
1. [Screenshot of application](#screenshot-of-application)
1. [Installation & Setup](#installation--setup)
1. [Usage](#usage)
1. [Technologies utilization](#technologies-utilization)
1. [Contributors](#contributors)
1. [Acknowledgement](#acknowledgement)

---
## Screenshot of application
![search view](./public/searchvview.png)

---

## Installation & Setup
1. $ git clone git@github.com:xaihang/weekend-movie-sagas.git
1. `npm install`
1. Start postgres using brew services start postgresql (database name: `saga_movies_weekend`)
1. `npm run server` in your terminal
1. `npm run client` in another terminal. 
1. Navigate to localhost:3000

---

## Usage
*To use the movie management application, follow these steps:*

1. Open the Home/List Page to see a list of all the movies in the database.
1. Click on a movie poster to view the Details Page for that movie.
1.On the Details Page, you can view all details for the selected movie, including the title, description, image, and genres. To return to the Home/List Page, click the Back to List button.
1. To add a new movie, go to the Add Movie Form and fill in the movie title, poster image URL, description, and select a genre from the dropdown list. Click the Save button to save the new movie to the database and return to the Home/List Page.
1. To refresh the Details Page and maintain the same movie details, enable the Refresh on Details Page feature.
1. To edit the title and description of a movie, click on the Edit button on the Details Page. On the Edit Page, change the title and description as desired and click the Save button to update the movie details in the database and return to the Details Page.


---

## Technologies utilization 

* Javascript
* HTML
* CSS
* [React](https://reactjs.org/)
* [React Router v5](https://v5.reactrouter.com/web/guides/quick-start)
* [Redux](https://redux.js.org/)
* [Redux-Saga](https://redux-saga.js.org/)
* [Node js](https://nodejs.org/en/about/)
* [Express js](https://expressjs.com/)
* [Axio](https://axio.com/)
* [The Open Movie Database API](https://www.omdbapi.com/)
* [Postico 2](https://eggerapps.at/postico2/)
* [PostgreSQL](https://www.postgresql.org/)
* [Postman](https://www.postman.com/)
* [GitHub](https://github.com/xaihang/) 

---
