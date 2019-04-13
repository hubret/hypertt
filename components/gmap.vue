<template>
    <div class="mapcontainer">
        <div id="map">
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                map: null,
                markers: [],
            }
        },
        mounted() {

            this.map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(43.6427899,-79.4407163),
                zoom: 14,
                styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e5c163"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#c4c4c4"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e5c163"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e5c163"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#e5c163"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#575757"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#999999"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
],
                disableDefaultUI: true,
                zoomControl: true,
                scaleControl: true,
                scrollwheel: false,
                keyboardShortcuts: true,
            });
            
            this.places.forEach((el) => {
                
                console.log(el); 
                var m = new google.maps.Marker({
//                    icon: {
//                        url: "bubble.svg",
//                        size: new google.maps.Size(25, 45),
//                        origin: new google.maps.Point(0, 0),
//                        anchor: new google.maps.Point(12.5, 45),
//                        scaledSize: new google.maps.Size(25, 45)
//                    },
                    position: new google.maps.LatLng(Number(el.lat), Number(el.lng)),
//                    position: [el.lat, el.lng],
                    map: this.map,
                    title: el.name
                })

                this.markers.push(m)
            })
        },
        computed:{
            
            /**
                
                please put these in the getter thing not as computed data
                
                -TWO GETTERS FOR TWO ACTIONS FOR TWO CALLS
                
                -please un-noob the backwards lat and lng keys
            
            */
            places () {
                return [
                    {"name":"The Ontario Government Building","total":5,"lng":"-79.425999","lat":"43.6314656"},
                    {"name":"High Park","total":3,"lng":"-79.46610007979484","lat":"43.649243174510055"},
                ]
            },
            coords() {
                
                var stuff = [
                    [
                        -79.58188408100001,
                        43.627858282000076
                    ],
                    [
                        -79.58162162200001,
                        43.628013900000084
                    ],
                    [
                        -79.57982027300002,
                        43.626916946000094
                    ],
                    [
                        -79.57474377899999,
                        43.62539789500009
                    ],
                    [
                        -79.57350059800004,
                        43.62601345900008
                    ],
                    [
                        -79.57003210899997,
                        43.62690755700008
                    ],
                    [
                        -79.56847597100003,
                        43.626681054000116
                    ],
                    [
                        -79.56699005499999,
                        43.6281841210001
                    ],
                    [
                        -79.563994789,
                        43.62796625600008
                    ],
                    [
                        -79.56357999500003,
                        43.62664647700011
                    ],
                    [
                        -79.563734341,
                        43.624847569000096
                    ],
                    [
                        -79.56540349400002,
                        43.624499334000106
                    ],
                    [
                        -79.56572609500002,
                        43.62396314700008
                    ],
                    [
                        -79.56593396399998,
                        43.62251608400008
                    ],
                    [
                        -79.565620375,
                        43.62162971700012
                    ],
                    [
                        -79.56680044999997,
                        43.62099622200013
                    ],
                    [
                        -79.56688636100003,
                        43.6205110720001
                    ],
                    [
                        -79.566666297,
                        43.61777103600012
                    ],
                    [
                        -79.56784052600003,
                        43.61685833000011
                    ],
                    [
                        -79.568488985,
                        43.614597421000084
                    ],
                    [
                        -79.56788700199998,
                        43.613895507000095
                    ],
                    [
                        -79.566931541,
                        43.61346499300008
                    ],
                    [
                        -79.56468078799999,
                        43.61337334300008
                    ],
                    [
                        -79.564261894,
                        43.613054680000104
                    ],
                    [
                        -79.56439104400002,
                        43.61230575500012
                    ],
                    [
                        -79.56742583799998,
                        43.610597058000096
                    ],
                    [
                        -79.56734913800001,
                        43.6095070170001
                    ],
                    [
                        -79.56881918100001,
                        43.608515107000116
                    ],
                    [
                        -79.57008439800003,
                        43.60689219900011
                    ],
                    [
                        -79.57648390099997,
                        43.60139869400011
                    ],
                    [
                        -79.57898650400001,
                        43.5998271080001
                    ],
                    [
                        -79.593438712,
                        43.587346208000085
                    ],
                    [
                        -79.59544800300003,
                        43.58457070100012
                    ],
                    [
                        -79.622440915,
                        43.560819201000115
                    ],
                    [
                        -79.62491310600002,
                        43.56239180700008
                    ],
                    [
                        -79.63035651100003,
                        43.56423989700009
                    ],
                    [
                        -79.64956561200003,
                        43.57766849000011
                    ],
                    [
                        -79.65059259,
                        43.5787160900001
                    ],
                    [
                        -79.660108403,
                        43.5857728670001
                    ],
                    [
                        -79.63666550799998,
                        43.60785889900011
                    ],
                    [
                        -79.632292794,
                        43.60506040000011
                    ],
                    [
                        -79.62946258799998,
                        43.603648901000085
                    ],
                    [
                        -79.62615180100002,
                        43.6012089930001
                    ],
                    [
                        -79.58580814300002,
                        43.63780422400008
                    ],
                    [
                        -79.585335661,
                        43.637239902000076
                    ],
                    [
                        -79.586102265,
                        43.635194850000104
                    ],
                    [
                        -79.58561168000001,
                        43.634432266000076
                    ],
                    [
                        -79.58586742299998,
                        43.63356188300013
                    ],
                    [
                        -79.58530710999999,
                        43.63260035400007
                    ],
                    [
                        -79.58515744099999,
                        43.63157182200011
                    ],
                    [
                        -79.58611288800002,
                        43.62939523800013
                    ],
                    [
                        -79.58524927300002,
                        43.628682036000086
                    ],
                    [
                        -79.58188408100001,
                        43.627858282000076
                    ]
                ];
                
                return stuff.map( position => {
                    
                    return {
                        lat: position[1],
                        lng: position[0],
                    }
                    
                    
                } )
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mapcontainer{
        z-index: -1;
        position: fixed;
        height: 100vh;
        width: 100%;

        >#map {
            height: 100vh;
            width: 100%;
        }
    }

</style>