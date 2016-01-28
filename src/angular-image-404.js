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
          var width = element[0].offsetWidth || 120;
          var height = element[0].offsetHeight || 120;
          var bgcolor = attributes.fbBgcolor.replace('#', '') || "";
          var color = attributes.fbColor.replace('#', '') || "";
          var text = attributes.fbText || "";
          var result = '';
          console.log('element:', element[0]);
          console.log('bgcolor:', bgcolor, 'color:', color, 'text:', text);
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