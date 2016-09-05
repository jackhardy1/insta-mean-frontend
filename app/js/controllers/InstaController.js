instaApp.controller('InstaController', ['InstaFactory', function(InstaFactory){

  var self = this;

  self.instas = [new InstaFactory('Insta1', true),
  new InstaFactory('Insta2', false)];

  self.addInsta = function(text){
    self.instas.push(new InstaFactory(text));
  }

  self.removeInsta = function(){
    self.instas.pop();
  }

}]);
