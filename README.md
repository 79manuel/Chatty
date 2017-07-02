# Chatty App

Chatty App Is Twitter App is a full stack application built with ReactJS, SASS, Webpack with Babel, JSX and ES6. Websockets using Node package 'ws' on the server side, and native Websocket on client side. Chatty will allow users to communicate with each other without having to register accounts. It includes several features like seeing how many users are online and changing the color of different users.

## Final Product 
!["Screenshot of Home Page. Compose section hidden"](https://github.com/79manuel/tweetr/blob/master/docs/Home%20page%20no%20compose.png?raw=true)
!["Screenshot of Home Page. Compose new tweet"](https://github.com/79manuel/tweetr/blob/master/docs/home%20page%20compose%20new%20tweet.png?raw=true)
!["Screenshot of Home Page. New tweet posted"](https://github.com/79manuel/tweetr/blob/master/docs/Home%20page%20post%20new%20tweet.png?raw=true)
!["Screenshot of Home Page. Hover"](https://github.com/79manuel/tweetr/blob/master/docs/Home%20page%20hover.png?raw=true)

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
