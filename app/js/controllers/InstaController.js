instaApp.controller('InstaController', ['InstaFactory', function(InstaFactory){

  var self = this;

  self.instas = [
    {text: "insta1", completed: false},
    {text: "insta2", completed: true}
  ];

  self.addInsta = function(text){
    self.instas.push(new InstaFactory(text));
  }

  self.removeInsta = function(){
    self.instas.pop();
  }

}]);
