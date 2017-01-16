(function () {

    'use strict';

    angular.module('app.directives').directive('mapDirective', mapDirective);
    
    function mapDirective(mapService) {
        return {
            restrict: 'EA',
            scope: {
                mapOptions : '='
            },
            link: function (scope, iElement) {
                //debugger;
                //var div = document.getElementById('test');

                //div.innerHTML = div.innerHTML + 'Extra stuff';
                //div.append('div').attr('id', 'container');
                d3.select(iElement[0]).append('div').attr('id', 'container');
                mapService.drawMap(scope.mapOptions);
                //var d3_ = d3.select(iElement[0]);
                //console.log(d3_);
                //d3_.append('div').attr('id', 'container');
            }
        };
    }
}());