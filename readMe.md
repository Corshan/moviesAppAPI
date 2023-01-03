# Assignment 2 - Web API.
​
Name: Corey Shanahan
​
## Features.
​
[A bullet-point list of the ADDITIONAL features/endpoints you have implemented in the API **THAT WERE NOT IN THE LABS** ]. 
​
 + Get Actors - gets a list of actors 
​
 + Get actor by id - gets an actors details by id
​
## Installation Requirements
​
Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 
​
Describe getting/installing the software, perhaps:
​
```bat
git clone http:\https://github.com/Corshan/moviesAppAPI.git
```
​
followed by installation
​
```bat
git install
```
​
## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:
​
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```
​
​
## API Design
Give an overview of your web API design, perhaps similar to the following: 
​
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/actors | get a list of actors | N/A | N/A | N/A
| /api/actors/{actorid} | get a actor | N/A | N/A | N/A
| /api/genres | get genres | N/A | N/A | N/A
​
​
## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. **REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB**
+ Login and signup 
+ all routes apart from the login and signup pages are private 
​
## Integrating with React App
​
Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 
​
~~~Javascript
export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getGenres = () => {
    return fetch(
       '/api/genres',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getActors = () => {
    return fetch(
       '/api/actors',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
​
~~~
​
## Extra features
​
. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  
N/A
​
## Independent learning.
​
. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  
N/A
