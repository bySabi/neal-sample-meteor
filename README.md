# neal-React Sample Page

This is a sample page for [neal-react](http://www.github.com/dennybritz/neal-react), reactjs components for building landing pages.
This project is a port of [neal-sample](https://github.com/dennybritz/neal-sample) to `meteor 1.3` and [meteor-webpack](https://github.com/thereactivestack/meteor-webpack).

## Develop locally

```bash
git clone https://github.com/bySabi/neal-sample-meteor.git
cd neal-sample-meteor
meteor
npm install
meteor
```

# Production
You can use meteor run, meteor build, mup or anything working with Meteor.

## Run in production mode
`meteor run --production`

## Build for production
`meteor build .`

## Deploy with Meteor-up
`mup deploy`

# Cordova
You need to do those 3 steps to make it works with iOS or Android:

1. Add the platform to your Meteor project

    ```javascript
    meteor add-platform ios
    meteor add-platform android
    ```
1. Allow access to your dev server in your `/mobile-config.js` file:

    ```javascript
    App.accessRule('http://192.168.1.100:3500/*');
    ```

1. Replace localhost by your local ip address in `webpack.json`.
