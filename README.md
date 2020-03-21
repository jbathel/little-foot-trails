# ![Logo]() 


## Table of contents

- [Motivations](#motivations)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)

## Motivations

As a group with two mothers who enjoy being active with their families we wanted to create something that would help kids and families be more active.

- Each member learning learning an Framework of interest
  - React
    - Functional Components
    - Hooks
    - Context API
  - Django
    - Django Rest Framework

## Screenshots

<p align="center">Home Page</p>

![Home Page]()

<p align="center">Results Page</p>

![Results Page]()

<p align="center">Detail Page</p>

![Detail Page]()

## Technologies

### Architecture

![Tech Stack]()

### Libraries and tools

![Libraries and tools]()

### GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling queries with existing data. In our application, we used it as an API to fetch data from our MongoDB database.

You can play with GraphQL on the playground [here](https://banksyco.tk/).

Here is how playground looks like with `query` example:

![GQL Playground Example](https://i.imgur.com/zCnBdQ8.png)

## Local Setup

```
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
python3 manage.py runserver

npm install
npm start
```

### Building

Build script will create a `build` directory with a compiled JavaScript code which will be compatible with most modern browsers. We are using `create-react-app` as a starting point in our app.

```
npm run build
```


## Code Examples

All components are functional and written in Javascript:
We used Context API to 'fetch' global variables 

```javascript
export const Results = () => {
  const [trails, setTrails] = useState([]);
  const {
    tags: [trailTags]
  } = useContext(Context);

  function makeQuery(array, param) {
    let jsonObject = Object.assign({}, array);
    var queryString = Object.keys(jsonObject)
      .map(key => param + "=" + jsonObject[key])
      .join("&");
    return queryString;
  }

  useEffect(() => {
    async function fetchTrails() {
      let query = makeQuery(trailTags, "tags");
      const results = await fetch("http://localhost:8000/api/trails/?" + query);
      const trails = await results.json();
      setTrails(trails);
    }
    fetchTrails();
  }, [trailTags]);
```

## Features

- Users can be authenticated using Google Sign-In or by creating a new account
- Cart data persists throughout browser sessions using localStorage
- Payments are handled via external Stripe API
- Clothing/accessory models are stored in Mongo and retrieved dynamically

Considerations for improvement: 

- Expand inventory models with options for stock quantity, size, alt angles
- Save cart persistence on database for logged in users
- Better pop-up messages for error handling

## Landing Page and Deployment

Landing page: [here](https://little-foot-trails.herokuapp.com/#features)

Project is deployed on Heroku!

[Little Foot Trails](https://little-foot-trails.herokuapp.com)

## Inspiration



## Contact

Created by:

- [Banu Sapakova](https://github.com/banuaksom)
- [Jessica Bathel](https://github.com/jbathel)
- [Ryuichi Miyazaki](https://github.com/rmiyazaki6499)
