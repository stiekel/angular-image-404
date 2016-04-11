angular.module('angular-image-404', [])
  .directive('image404', function(){
    return {
      restrict: 'A',
      link: function(scope, element, attributes){
        var notFoundCount = 0;
        if(!attributes.src) {
          changeSCR();
        }
        element.on('error', changeSCR);
        function changeSCR(){
          var newIamgeUrl = attributes.image404;
          if(notFoundCount >= 3 || !newIamgeUrl) {
            newIamgeUrl = getDefaultImagePlaceholder();
          }
          element.attr('src', newIamgeUrl);
          notFoundCount++;
        }
        function getDefaultImagePlaceholder() {
          var width = angular.element(element[0]).attr('max-width') || element[0].offsetWidth || 120;
          var height = angular.element(element[0]).attr('max-height') || element[0].offsetHeight || 120;
          var bgcolor = attributes.fbBgcolor ? attributes.fbBgcolor.replace('#', '') : "";
          var color = attributes.fbColor ? attributes.fbColor.replace('#', '') : "";
          var text = attributes.fbText || "";
          var result = '';
          var protocol = window.location.href.split('://').shift();
          if(!protocol) protocol = 'http';
          result = protocol + '://dummyimage.com/' + width + 'x' + height;
          if(bgcolor && color) {
            result += '/' + bgcolor + '/' + color;
          }
          if(text) {
            result += '&text=' + text;
          }
          return result;
        }
      }
    }
  });