var app = angular.module('app', ['angular-image-404']);

app.controller('TestController', TestController);

function TestController() {

  this.image = 'http://placeholder.it'
}