describe('InstaController', function() {
  beforeEach(module('instaApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('InstaController');
  }));

  it('initialises with an Insta', function() {
    objs =
      {text: "insta1", completed: false}
      expect(ctrl.instas[0]).toEqual(objs);
  });

});
