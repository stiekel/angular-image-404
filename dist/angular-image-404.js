angular.module('angular-image-404', [])
  .directive('image404', function(){
    return {
      restrict: 'A',
      link: function(scope, element, attributes){
        var notFoundCount = 0;
        element.on('error', function(){
          var newIamgeUrl = attributes.angular404;
          if(notFoundCount >= 3 || !newIamgeUrl) {
            newIamgeUrl = getDefaultImagePlaceholder();
          }
          element.attr('src', newIamgeUrl);
          notFoundCount++;
        });

        function getDefaultImagePlaceholder() {
          var width = element[0].offsetWidth || 120;
          var height = element[0].offsetHeight || 120;
          var protocol = window.location.href.split('://').shift();
          if(!protocol) protocol = 'http';
          return protocol + '://dummyimage.com/' + width + 'x' + height;
        }
      }
    }
  });