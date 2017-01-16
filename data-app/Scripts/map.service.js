(function () {

    'use strict';

    angular.module('app.services').service('mapService', mapService);

    mapService.$inject = ['dataService'];

    function mapService(dataService) {
        var self = this;

        self.drawMap = function (mapOptions) {
            //alert('hjhj');
            //debugger;
            //var projection = d3.geo.mercator().center([10, 10]).scale(1000);

            //d3.select('#container').selectAll('svg').remove();

            //var svg = d3.select('#container').append('svg').attr('width', 960).attr('height', 500);

            //var path = d3.geo.path().projection(projection);

            //var g = svg.append('g');

            //g.selectAll('path').data(topojson.object(world, world.objects.countries).geometries).enter().append('path').attr('fill', 'green').attr('d', path);

          //  var width = 960, height = 500;

            var projection = d3.geo.mercator().center(mapOptions.centre).scale(mapOptions.scale).rotate(mapOptions.rotate);

            var svg = d3.select("#container").append("svg").attr("width", mapOptions.width).attr("height", mapOptions.height);

            var path = d3.geo.path().projection(projection);

            var g = svg.append("g");

            g.selectAll("path").data(topojson.object(world, world.objects.countries).geometries).enter().append("path").attr('fill', mapOptions.color).attr("d", path);

            //var loc = dataService.loadData();
            
            //var f = eval(loc);
            //if (typeof (f.length) != "undefined") { } else { }
            //if (typeof (f.top) != "undefined") { f = f.top(Infinity); } else { }
            //if (typeof (f.dimension) != "undefined") { f = f.dimension(function (d) { return ""; }).top(Infinity); } else { }
            //console.log(loc + "(" + f.length + ") = " + JSON.stringify(f).replace("[", "[\n\t").replace(/}\,/g, "},\n\t").replace("]", "\n]"));

            //var colombo = [-37.824997, 144.951999];
            //g.append("circle")
            //   .attr("cx", function (d) {
            //       return projection(colombo)[0];
            //   })
            //   .attr("cy", function (d) {
            //       return projection(colombo)[1];
            //   })
            //   .attr("r", 10)
            //   .style("fill", "red");

        }

    }

}());