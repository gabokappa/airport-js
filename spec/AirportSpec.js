'use strict';

describe('Aiport', function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
});
