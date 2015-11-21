'use strict';

describe('myApp.service module', function() {

  beforeEach(module('myApp.service'));

  describe('service controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var serviceCtrl = $controller('serviceCtrl');
      expect(serviceCtrl).toBeDefined();
    }));

  });
});