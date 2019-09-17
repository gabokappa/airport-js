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
