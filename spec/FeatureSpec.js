'use strict';

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at
//   an airport and confirm that it has landed


// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to take off from
//   an airport and confirm that it is no longer in the airport

describe('Feature Test:', function(){
  var plane;
  var airport;


  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('good weather conditions', function() {
    beforeEach(function() {
    spyOn(airport, 'isStormy').and.returnValue(false);
    });

    it('planes can be instructed to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to takeoff', function(){
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.planes()).not.toContain(plane);
    });

    it('throws and error if the hangar has reached capacity', function(){
      plane.land(airport);
      var plane2 = new Plane;
      plane2.land(airport);
      var plane3 = new Plane;
      plane3.land(airport);
      var plane4 = new Plane;
      expect(function() {plane4.land(airport);}).toThrowError("Hangar full");
    });
  });

  it('plane cannot takeoff if weather is stormy', function(){
    spyOn(Math,'random').and.returnValue(0);
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function() {plane.takeoff(airport);}).toThrowError("Cannot takeoff due to weather");
    expect(airport.planes()).toContain(plane);
  });

  it('plane cannot land if weather is stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function() {plane.land(airport);}).toThrowError("Cannot land due to weather");
    expect(airport.planes()).not.toContain(plane);
  });



});
