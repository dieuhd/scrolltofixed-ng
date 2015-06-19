'use strict';

/**
 * @ngdoc directive
 * @name angularjsScrolltofixedApp.directive:ScrollToFixed
 * @description
 * # ScrollToFixed
 */
angular.module('scrolltofixed-ng',[])
    .constant('stfConfig', {})
    .directive('scrollToFixed', ['stfConfig', function (stfConfig) {
        'use strict';
        return {
            require: '?ngModel',
            restrict: 'A',
            link: function (scope, element, attrs) {
                var getOptions = function () {
                    return angular.extend({}, stfConfig, scope.$eval(attrs.scrollToFixed));
                };

                element.scrollToFixed(getOptions());
                if (attrs.ngModel) {
                    scope.$watch(attrs.ngModel, function() {
                        element.trigger('resize');
                    }, true);
                }

                element.bind('update', function() {
                    element.trigger('resize');
                });

                element.bind('$destroy', function() {
                    element.trigger('detach.ScrollToFixed');
                });
            }
        };
    }]);
