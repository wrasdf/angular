'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Password Control', function() {

    beforeEach(function() {
        browser().navigateTo('../../project/angular.html');
    });

    it('should return correct security check level', function() {
        input('password').enter('nexus');
        expect(binding("securityCheck")).toEqual("medium");
    });

    it('should return correct security check level', function() {
        input('password').enter('12');
        expect(binding("securityCheck")).toEqual("weak");
    });

    it('should return correct security check level', function() {
        input('password').enter('asdfwerewrewr');
        expect(binding("securityCheck")).toEqual("strong");
    });


});
