'use strict';

describe('Aiport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can clear a specific plane to takeoff', function(){
    var plane2;
    plane2 = jasmine.createSpy('plane2', ['land']);
    airport.clearForLanding(plane);
    airport.clearForLanding(plane2);
    // console.log(airport.planes());
    airport.clearForTakeOff(plane2);
    // console.log(airport.planes());
    console.log(plane);
    console.log(plane2);
    expect(airport.planes()).not.toContain(plane2);
    expect(airport.planes()).toContain(plane);

  });

});
