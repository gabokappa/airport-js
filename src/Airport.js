'use strict';

function Airport(){
  this._hangar = [];
}
Airport.prototype.planes = function(){ return this._hangar; };

Airport.prototype.clearForLanding = function(plane){
  if(this.isStormy()) {
    throw new Error("Cannot land due to weather");
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
