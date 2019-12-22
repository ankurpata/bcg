# BCG

BCG Assessment

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
 

### Installing &  Running
 
 
```
npm install
```

&&

```
npm start
```

 
## Explaination

As requested in the required assignment doc, this contains the source code with the following requirements:
 ```
 -  Added react-router and created HashRoutes for homepage. #
 -  Built entirely based on functional components with styled components and uses React Hooks.
 -  Follows the es6 standards and used dumb functional components with Hooks through out the app.
 -  For backed - Used the fake/dummy api endpoints  [jsonplaceholder.typecode](https://jsonplaceholder.typicode.com/guide.html)

 -  The get [posts](https://jsonplaceholder.typicode.com/posts?10) api returns more than 100 records and only first 10 results are shown in the UI.
 - The delete button fires a delete api call and updates the React's state using hooks. Likewise, on clicking any title and body and changing focus updates it by making an axios/api call.
 - Used [contenteditable](https://www.npmjs.com/package/react-contenteditable) for making tile & body editable.
 - Supports Sorting by title only. Since the dummy api had no real values for dates.
 - Persistent storage is not used since any change are not affecting any backend currently.
 - (+) button on the right can be used to add a new Memo which creates a new Tile(Memo) and sets the focus on title value. 
  ```

### Code Structure

```
 /src/assets  -  Contains static files - images/fonts/css
 /src/components/  - React components.
 /src/components/Body  - React components for the Body section. 
                        Contains functional components for Memos
 /src/components/Header & /Footer  - Contains Header & Footer components.
 /src/App.js   - Entry component which contains HashRouter
 
```

## Built With

* [Create react app](https://github.com/facebook/create-react-app) 
* [styled-components](https://www.npmjs.com/package/styled-components) 
* [contenteditable](https://www.npmjs.com/package/react-contenteditable) 
 

 

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ankur Patankar** - *Initial work* - [ankurpata](https://github.com/ankurpata)

 
