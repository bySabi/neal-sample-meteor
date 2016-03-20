# neal-react Sample Page

This is a sample page for [neal-react](http://www.github.com/dennybritz/neal-react), reactjs components for building landing pages.
This project is a port of [neal-sample](https://github.com/dennybritz/neal-sample) to `meteor 1.3` and [meteor-webpack](https://github.com/thereactivestack/meteor-webpack).

## Visit the Sample Page

- [Hosted Sample Page](https://http://bysabi.github.io/neal-sample-meteor/)


## Used packages

* Meteor 1.3
* [meteor-webpack](https://github.com/thereactivestack/meteor-webpack)
* React 15
* [neal-react](https://github.com/dennybritz/neal-react) - Startup Landing Page Components for React
* Bootstrap 4
* Font Awesome
* [react-helmet](https://github.com/nfl/react-helmet) - A document head manager for React
* [react-mounter](https://github.com/kadirahq/react-mounter) - A simple way to mount React components
* react-router
* [react-router-hash-scroll](https://github.com/bySabi/react-router-hash-scroll) - A `#hash` link animate scroll navigation

## How customize some dependencies

* Back to `React 0.14.x`

 ```
    $ npm remove react react-dom
    $ npm install react react-dom --save
 ```
* Back to builtin meteor `jQuery 1.11.2`

 ```
    $ npm remove jquery
    $ rm -fr packages/meteor-jquery--module
    $ meteor
 ```
* Reinstall previous removed `jQuery 2.1.x`

 [meteor-jquery--module](https://github.com/orgztion/meteor-jquery--module)

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




### If you have the `libsass` binding Error [#17](https://github.com/thereactivestack/meteor-webpack/issues/17)

`OSX`
* Install [nvm](http://dev.topheman.com/install-nvm-with-homebrew-to-use-multiple-versions-of-node-and-iojs-easily/)
* install node 0.10 with `nvm`
```
cd neal-sample-meteor
nvm install 0.10
```
* check installed node versions `nvm ls`
* rebuild `node-sass` with same meteor node binary, `0.10`
```
nvm use 0.10
npm rebuild node-sass
```
* back to `system` node `5.X` version with `npm 3`
```
nvm use system
```


# License

MIT
