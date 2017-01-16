(function () {

    'use strict';

    angular.module('app.controllers').controller('mainController', mainController);

    mainController.$inject = ['$scope', 'dataService'];

    function mainController($scope, dataService) {
        var vm = this;

        vm.mapOptions = {
            width: 960,
            height: 500,
            centre: [0, 5],
            scale: 1000,
            rotate : [180, 0],
            color: '#D1CBCB'
        };

       // var mapData;
        //dataService.loadData().then(function (e) {

        //    var data = e

        //    var f = eval(data);
        //    if (typeof (f.length) != "undefined") { } else { }
        //    if (typeof (f.top) != "undefined") { f = f.top(Infinity); } else { }
        //    if (typeof (f.dimension) != "undefined") { f = f.dimension(function (d) { return ""; }).top(Infinity); } else { }
        //    console.log(data + "(" + f.length + ") = " + JSON.stringify(f).replace("[", "[\n\t").replace(/}\,/g, "},\n\t").replace("]", "\n]"));
        //});

        dataService.loadData(vm.mapOptions);
      
    }


}());