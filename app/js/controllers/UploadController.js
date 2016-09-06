instaApp.controller('UploadController', ['$scope', 'Upload', 'S3UploadService', function($scope, Upload, S3UploadService){

  $scope.uploadFiles = function (file) {
      S3UploadService.Upload(file).then(function (result) {
          // Mark as success
          file.Success = true;

          var url = "https://s3-us-west-2.amazonaws.com/insta-mean/" + file.name
          console.log(url);

      }, function (error) {
          // Mark the error
          $scope.Error = error;
      }, function (progress) {
          // Write the progress as a percentage
          file.Progress = (progress.loaded / progress.total) * 100
      };
    });
  };
}]);
