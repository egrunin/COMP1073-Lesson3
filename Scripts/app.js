// main javasript document

/*

*/


"use strict";

var username = "Jack";
var age = 30;
var isHungry = true;

var usernames = [];

// initialize the array with values
usernames = ["Mike", "Rich", "Anju", "Margot"];
console.log("Before the push: " + usernames);

// add an element to the bottom of array
usernames.push("Tom");
console.log("after the push: " + usernames);

// remove an element to the bottom of array
usernames.pop();
console.log("after the pop: " + usernames);

/*
// to see an array
var usernames = [];
// var username = new Array ();

usernames[0] = "Mike";
console.log(usernames[0]);

usernames[1] = "Rich";
usernames[2] = "Anju";
usernames[3] = "400";

usernames[0] = "Jack";
console.log(usernames[0]);

usernames[5] = "Another User";

console.log(usernames);
console.log(usernames[4]);
*/
