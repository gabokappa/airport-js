'use strict';

function Airport(capacity = 3){
  this._hangar = [];
  this._capacity = capacity;
}
Airport.prototype.planes = function(){ return this._hangar; };

Airport.prototype.clearForLanding = function(plane){
  if(this.isStormy()) {
    throw new Error("Cannot land due to weather");
  }

  if(this._hangar.length === this._capacity) {
    throw new Error("Hangar full");
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane){
  if(this.isStormy()) {
    throw new Error("Cannot takeoff due to weather");
  }

  var index = this._hangar.indexOf(plane);
  if (index > -1) {
    this._hangar.splice(index, 1);
  };
};

Airport.prototype.isStormy = function() {
  if (Math.random() > 0.8) {
    return true;
  } else {
    return false;
  }

};
