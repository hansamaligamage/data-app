(function () {

    'use strict';

    angular.module('app.services').service('dataService', dataService);

    function dataService() {

        var self = this;

        return {
            //alert('load');
            loadData: function (mapOptions) {
                queue()
                    .defer(d3.csv, 'data/sample-data.csv')
                    .await(function (error, data) {
                        if (data) {
                             console.log(data);
                            //return data;
                             debugger;

                             var minBaseline = d3.min(data, function (d) {
                                 return Number(d.Baseline);
                             });

                             var maxBaseline = d3.max(data, function (d) {
                                 return Number(d.Baseline);
                             });

                             var sizeRange = d3.scale.linear().domain([minBaseline, maxBaseline]).range([1, 30]);

                             data.forEach(function (d) {
                                 var coordination = d.latitude_longitude.split(",");

                            

                           

                            //var items = crossfilter(data);
                            //var dataByCountry = items.dimension(function (d) {
                            //   // return d.Country + ':' + d.Site;
                            //    //return d.latitude_longitude + ':' + DeliveryType;
                            //    return 'latitude_longitude=' + d.latitude_longitude + ';DeliveryType=' + d.DeliveryType;
                            //});

                            //var f=eval(dataByCountry);
                            //if (typeof(f.length) != "undefined") {}else{}
                            //if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
                            //if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
                            //console.log(dataByCountry+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));

                            //var baselinePerLoc = dataByCountry.group().reduceSum(function (d) { return d.Baseline }).all();
                            //$.each(baselinePerLoc, function (index) {
                            //    console.log(baselinePerLoc[index].key + " - " + baselinePerLoc[index].value);
                            //});
                            //baselinePerLoc.top(Infinity).forEach(function (a, b) {
                            //    console.log(a.key + ' - ' + a.value);
                            //});

                            //var f = eval(baselinePerLoc);
                            //if (typeof (f.length) != "undefined") { } else { }
                            //if (typeof (f.top) != "undefined") { f = f.top(Infinity); } else { }
                            //if (typeof (f.dimension) != "undefined") { f = f.dimension(function (d) { return ""; }).top(Infinity); } else { }
                            //console.log(f);

                            //var point = f[0];
                            ////var points = f[0].split(';')
                            //var keyValPair = point.key.split(';');
                            ////console.log(keyValPair[0]);
                            ////console.log(keyValPair[1]);
                            //var location = keyValPair[0].replace('latitude_longitude=', '').split(',');
                            ////console.log('loc ' + location);
                            //var latlong = location[0];
                            //console.log(x[0]);
                            //console.log(points[1]);
                            //console.log()
                            //console.log(location[0]);
                            //console.log(location[1]);
                                 var projection = d3.geo.mercator().center(mapOptions.centre).scale(mapOptions.scale).rotate(mapOptions.rotate);;
                                 var svg = d3.select("#container svg g").attr("width", mapOptions.width).attr("height", mapOptions.height);

                            //for (var i = 0; i < f.length; i++)
                            //{
                            //    var currentPoint = f[i];
                            //    var keyValPair = currentPoint.key.split(';');
                            //    var location = keyValPair[0].replace('latitude_longitude=', '').split(',');
                            //    console.log(location[0]);
                            //    console.log(location[1]);
                            //    svg.append("circle")
                            // .attr("cx", function (d) {
                            //     return projection(location)[0];
                            // })
                            // .attr("cy", function (d) {
                            //     return projection(location)[1];
                            // })
                            // .attr("r", 10)
                            // .style("fill", "red");
                            //}

                            //var colombo = [80, 6];
                                 //var colombo2 = [-37.824997, 144.951999];

                                 var fillColor = 'blue';
                                 if (d.DeliveryType == 'Subcontract')
                                     fillColor = 'red';

                            svg.append("circle")
                               .attr("cx", function () {
                                   return projection([coordination[1], coordination[0]])[0];
                                   //return projection(colombo)[0];
                               })
                               .attr("cy", function () {
                                   //return projection(colombo)[1];
                                   return projection([coordination[1], coordination[0]])[1];
                               })
                               .attr("r", sizeRange(d.Baseline))
                               .style("fill", fillColor);

                             });
                        }
                    });
            }


            //return {
            //    loadData: function () {
            //        alert('load');
            //    }
            //}

        };

    }
}());