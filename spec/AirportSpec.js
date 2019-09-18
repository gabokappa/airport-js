'use strict';

describe('Aiport', function(){
  var airport;
  var plane;
  
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  describe('good weather conditions', function() {
    beforeEach(function() {
    spyOn(airport, 'isStormy').and.returnValue(false);
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
      airport.clearForTakeOff(plane2);
      expect(airport.planes()).not.toContain(plane2);
      expect(airport.planes()).toContain(plane);
    });
  });

  it('plane can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy conditions', function(){
    it('does not clear planes for takeoff', function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeOff(plane); }). toThrowError("Cannot takeoff due to weather");
    });

    it('does not clear planes for landing', function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForLanding(plane); }). toThrowError("Cannot land due to weather");
    });
  });

});
