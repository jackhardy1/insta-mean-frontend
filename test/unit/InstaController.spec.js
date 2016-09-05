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

  it('adds a new insta', function() {
    ctrl.addInsta('NewInsta');
    var insta = {text: "NewInsta", completed: false};
    expect(ctrl.instas.pop()).toEqual(insta);
  });

  it('removes the last insta', function() {
    var initialCount = ctrl.instas.length;
    ctrl.removeInsta();
    expect(ctrl.instas.length).toEqual(initialCount - 1);
  });

});
