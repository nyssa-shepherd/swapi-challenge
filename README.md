## Table of Contents
 * [Introduction](#introduction)
 * [Set Up](#set-up)
 * [Technologies Used](#technologies-used)
 * [API Reference](#api-reference)
 
## Introduction
This project utilzes the [StarWars API](https://swapi.dev/) in order to display characters from Star Wars, search for characters by name, and view additional details when clicking on a character.


## Set Up
1. Clone repo
```bash
git clone git@github.com:nyssakeller/swapi-code-challenge.git
```
2. Install dependencies
```bash
npm install
```
3. Run in browser
```bash
npm start
```

## Technologies Used
* **React v17.0.2** (Latest stable release)
* **React Router v17.0.2** (Latest stable release): 
  * Allows us to build a single-page web application with navigation without the page refreshing as the user navigates
* [Axios](https://www.axios.com/): 
   * Light-weight/optimized solution that allows us to communicate with APIs easily

## API Reference
### Endpoints
1. [Get species by page number](https://swapi.dev/api/species/)
```bash
HTTP 200 OK
Content-Type: application/json
GET /api/species/?page={pageNumber}
```
#### Sample Response
```bash
{
    "count": 37, 
    "next": "https://swapi.dev/api/species/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Human", 
            "classification": "mammal", 
            "designation": "sentient", 
            "average_height": "180", 
            "skin_colors": "caucasian, black, asian, hispanic", 
            "hair_colors": "blonde, brown, black, red", 
            "eye_colors": "brown, blue, green, hazel, grey, amber", 
            "average_lifespan": "120", 
            "homeworld": "https://swapi.dev/api/planets/9/", 
            "language": "Galactic Basic", 
            "people": [
                "https://swapi.dev/api/people/66/", 
            ], 
            "films": [
                "https://swapi.dev/api/films/1/",
            ], 
            "created": "2014-12-10T13:52:11.567000Z", 
            "edited": "2014-12-20T21:36:42.136000Z", 
            "url": "https://swapi.dev/api/species/1/"
        },
      ],
 }
```
2. [Search for people](https://swapi.dev/api/people/?search=han)
```bash
HTTP 200 OK
Content-Type application/json
GET /api/people/?search={searchString}
```
#### Sample Response 
```bash
{
    "count": 1, 
    "next": null, 
    "previous": null, 
    "results": [
        {
            "name": "Han Solo", 
            "height": "180", 
            "mass": "80", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "brown", 
            "birth_year": "29BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.dev/api/planets/22/", 
            "films": [
                "https://swapi.dev/api/films/1/", 
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [
                "https://swapi.dev/api/starships/10/", 
            ], 
            "created": "2014-12-10T16:49:14.582000Z", 
            "edited": "2014-12-20T21:17:50.334000Z", 
            "url": "https://swapi.dev/api/people/14/"
        }
    ]
}
```
