# scrolltofixed-ng

> AngularJS directive for [ScrollToFixed](https://github.com/bigspotteddog/ScrollToFixed)

# Requirements
- AngularJS
- [ScrollToFixed](https://github.com/bigspotteddog/ScrollToFixed)
- Firefox 3+, Google Chrome 10+, Safari 5+, Internet Explorer 8/9, and Opera 11.60+.

# Testing

We use [karma](http://karma-runner.github.io/0.8/index.html) and jshint to ensure the quality of the code.  The easiest way to run these checks is to use grunt:
```
  npm install -g grunt-cli
  npm install
  bower install
  grunt
```
The karma task will try to open Chrome as a browser in which to run the tests.  Make sure this is available or change the configuration in `test\karma.conf.js` 

## Installation

```bash
bower install scrolltofixed-ng --save
```

# Usage

First, read the documentation of [ScrollToFixed](https://github.com/bigspotteddog/ScrollToFixed).

We use [bower](http://bower.io/) for dependency management.  Install and save to bower.json by running:

    bower install srolltofixed-ng --save

This will copy the ui-date files into your `components` folder, along with its dependencies. 


Load the script files in your application:

    <script type="text/javascript" src="components/angular/angular.js"></script>
    <script src="bower_components/ScrollToFixed/jquery-scrolltofixed.js"></script>
    <script src="bower_components/scrolltofixed-ng/src/scrolltofixed.js"></script>

Add the date module as a dependency to your application module:

    var myAppModule = angular.module('MyApp', ['scrolltofixed-ng'])

Apply the directive to your form elements:

    <div scroll-to-fixed> </div>

## Attributes

### scroll-to-fixed

`scroll-to-fixed` defines the options to pass to `ScrollToFixed`.

You can specify them via a plain object in your templates:

```html
    <div scroll-to-fixed="{ bottom: 0 }">ScrollToFixed</div>
```

or a scoped object in your controllers:

```javascript
$scope.options = {
  bottom: 0
};
```

```html
<div scroll-to-fixed="options">ScrollToFixed</div>
 ```
 
 Or Setting at config app
 
```javascript 
  .config(function (stfConfig){
 
    stfConfig.marginTop = 120;
 }) 
```

### ng-model

`ng-model` defines the object to watch and triggers a `resize` event on `ScrollToFixed` when this object changes.

## Events

### update

`update` triggers a `resize` event on `ScrollToFixed`.

### $destroy

`$destroy` triggers a `detach.ScrollToFixed` event on `ScrollToFixed`.

## License

`scrolltofixed-ng` is released under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).
