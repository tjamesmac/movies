# Movies
## Project setup
### Install necessary dependencies
```
npm install
```
### Start server to test end-points
```
npm start
```

# API Endpoints
## HealthCheck

  Returns json data about a single user.

#### URL
```
  /healthcheck
```
#### Method:

```
GET
```
#### Success Response:

  **Code:** 200 <br />
  **Content:** `{ status: "UP" }`

## All Movies

  Returns json data about all movies.

#### URL
```
  /movies
```
#### Method:

```
GET
```

#### Success Response:

  **Code:** 200 <br />

## Single movie

  Returns json data about a single movie.

#### URL
```
  /movies/:id
```
#### Method:

```
GET
```

#### URL Params

  ##### Required:

  `id=[integer]`

#### Success Response:

  ##### Code: 200 <br />
  ##### Content:
  ```json
{
  "movie_id": 5,
  "title": "Jaws",
  "description": "A giant great white shark arrives on the shores of a New England beach resort and wreaks havoc with bloody attacks on swimmers, until a local sheriff teams up with a marine biologist and an old seafarer to hunt the monster down.",
  "producer": "Universal Pictures",
  "available_in_3d": false,
  "age_rating": "PG",
  "oscar_nominations": 18,
  "likes": 1000,
  "comments": [
    {
      "user": "Alison",
      "message": "This is amazing .....",
      "dateCreated": "2013-09-27",
      "like": 10
    },
    {
      "user": "testingPriest",
      "message": "Killer shark! What's not to like",
      "dateCreated": "2012-09-11",
      "like": 9
    },
    {
      "user": "David",
      "message": "It was OK to pass the time away",
      "dateCreated": "2015-01-01",
      "like": 5
    },
    {
      "user": "Jones",
      "message": "Scary, I wished I had bought a different movie",
      "dateCreated": "2017-02-05",
      "like": 1
    }
  ]
}
  ```
#### Error Response:

  **Code:** 404 NOT FOUND <br />
  **Content:** `{ "error": "No movie found" }`

## Report
  Returns json containing report data

#### URL
```
  /movies/report
```
#### Method:

`GET`

#### Success Response:

  **Code:** 200 <br />
  **Content:**
  ```json
  {
    "movies_available_in_3d":2,
    "user_with_most_comments":"testingPriest",
    "most_oscar_nominations":20,
    "newest_comments": [
      {
        "user":"Jones",
        "message":"Scary, I wished I had bought a different movie",
        "dateCreated":"2017-02-05",
        "like":1
      },
      {
        "user":"nigel",
        "message":"Pile of rubbish, just for kids",
        "dateCreated":"2016-09-12",
        "like":2
      },
      {
        "user":"testingPriest",
        "message":"Melted my heart",
        "dateCreated":"2016-09-08",
        "like":9
      },
      {
        "user":"deadpool_fan_606",
        "message":"I've seen it 25 times this week",
        "dateCreated":"2016-09-08",
        "like":10
      },
      {
        "user":"testingPriest",
        "message":"This is the best movie ever",
        "dateCreated":"2016-08-09",
        "like":10
      }
    ]
  }
  ```

