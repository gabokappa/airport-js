'use strict';

function Plane(){}
  Plane.prototype.land = function(airport){
    airport.clearForLanding(this);
  };

// function Airport(plane) {
//   this.planes = [];
// };



// function Plane(airport) {
//   this.airBourne = true;
//   // this.land = function(airport) {
//   //   airport.hanger.push(this);
// };
//
// Plane.prototype.land = function(airport) {
//   airport.hanger.push(this);
// };

// function Dog(name) {
//   this.name = name;
// }
//
// Dog.prototype.bark = function() {
//   console.log(this.name + ' says Woof!')
// };