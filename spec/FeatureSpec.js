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

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to takeoff', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('plane cannot takeoff if weather is stormy', function(){
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function() {plane.takeoff();}).toThrowError("Cannot takeoff due to weather");
    expect(airport.planes()).toContain(plane);
  });
});
