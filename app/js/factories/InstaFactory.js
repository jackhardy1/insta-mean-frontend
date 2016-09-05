instaApp.factory('InstaFactory', function() {

  var Insta = function(text){
    this.text = text;
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };

  Insta.prototype.photoUpload = function() {
    this.photoUploaded = true;
  };

  Insta.prototype.complete = function() {
    this.completed = true;
  }

  return Insta;
});
