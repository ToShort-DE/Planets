const planets = [];


planets.push(
{
    name: "Sun",
    size: 32,
    positionX: -149.30,
    positionY: 0,
    positionZ: 0,
    texture: "assets/img/planets/2k_sun.jpg",
    info: 
        '<h2>SUN</h2>',
    planet: null
}, {
    name: "MERCURY",
    size: 8,
    positionX: -90.36,
    positionY: 0,
    positionZ: 0,
    texture: "assets/img/planets/2k_mercury.jpg",
    info: 
        '<h2>MERCURY</h2>\n'+
        '<h6>SMALLEST PLANET IN OUR SOLAR SYSTEM</h6>\n'+
        '<div class="infos">\n'+
        '    <p><span class="gray">Radius:</span> 2.439,7 km </p>\n'+
        '    <p><span class="gray">Distance from Sun:</span> 58 million km </p>\n'+
        '    <p><span class="gray">Moons: </span>no moons </p>\n'+
        '    <p><span class="gray">Gravity: </span>3,7 m/s² </p>\n'+
        '    <p><span class="gray">Tilt of Axis: </span>2° </p>\n'+
        '    <p><span class="gray">Lenghts of Year: </span>88 days </p>\n'+
        '    <p><span class="gray">Lenght of Day: </span>58d 15 h 30 min </p>\n'+
        '    <p><span class="gray">Temperature: </span>354 degrees F </p>\n'+
        '</div>',
    planet: null
}, {
    name: "VENUS",
    size: 15,
    positionX: -58.47,
    positionY: 0,
    positionZ: 0,
    texture: "assets/img/planets/2k_venus.jpg",
    info: 
        '<h2>VENUS</h2>\n'+
        '<h6>EARTH’S CLOSEST PLANETARY NEIGHBOR</h6>\n'+
        '<div class="infos">\n'+
        '    <p><span class="gray">Radius:</span> 6.051,8 km </p>\n'+
        '    <p><span class="gray">Distance from Sun:</span> 108 million km </p>\n'+
        '    <p><span class="gray">Moons: </span>no moons </p>\n'+
        '    <p><span class="gray">Gravity: </span>8,87 m/s² </p>\n'+
        '    <p><span class="gray">Tilt of Axis: </span>177.3° </p>\n'+
        '    <p><span class="gray">Lenghts of Year: </span>225 days </p>\n'+
        '    <p><span class="gray">Lenght of Day: </span>23h 56m 4.1s</p>\n'+
        '    <p><span class="gray">Temperature: </span>464 °C</p>\n'+
        '</div>',
    planet: null
}, {
    name: "EARTH",
    size: 16,
    positionX: -16.86,
    positionY: 0,
    positionZ: 0,
    texture: "assets/img/planets/2k_earth.jpg",
    info: 
        '<h2>EARTH</h2>\n'+
        '<h6>THE BLUE PLANET</h6>\n'+
        '<div class="infos">\n'+
        '    <p><span class="gray">Radius:</span> 6.371 km</p>\n'+
        '    <p><span class="gray">Distance from Sun:</span> 150 million km </p>\n'+
        '    <p><span class="gray">Moons: </span>our moon </p>\n'+
        '    <p><span class="gray">Gravity: </span>9,807 m/s² </p>\n'+
        '    <p><span class="gray">Tilt of Axis: </span>23.5° </p>\n'+
        '    <p><span class="gray">Lenghts of Year: </span>365 days </p>\n'+
        '    <p><span class="gray">Lenght of Day: </span>24 hours</p>\n'+
        '    <p><span class="gray">Temperature: </span>57 degrees F</p>\n'+
        '</div>',
    planet: null
}, {
    name: "MARS",
    size: 12,
    positionX: 29.38,
    positionY: 0,
    positionZ: 0,
    texture: "assets/img/planets/2k_mars.jpg",
    info: 
        '<h2>MARS</h2>\n'+
        '<h6>THE RED PLANET</h6>\n'+
        '<div class="infos">\n'+
        '    <p><span class="gray">Radius:</span> 3.389,5 km</p>\n'+
        '    <p><span class="gray">Distance from Sun:</span> 228 million km</p>\n'+
        '    <p><span class="gray">Moons: </span>Phobos / Deimos</p>\n'+
        '    <p><span class="gray">Gravity: </span>3,721 m/s² </p>\n'+
        '    <p><span class="gray">Tilt of Axis: </span>25° </p>\n'+
        '    <p><span class="gray">Lenghts of Year: </span>687 days </p>\n'+
        '    <p><span class="gray">Lenght of Day: </span>1d 0h 37min</p>\n'+
        '    <p><span class="gray">Temperature: </span>0 °C</p>\n'+
        '</div>',
    planet: null
}, {
    name: "JUPITER",
    size: 34,
    positionX: 88.66,
    positionY: 0,
    positionZ: 0,
    texture: "assets/img/planets/2k_jupiter.jpg",
    info: 
        '<h2>JUPITER</h2>\n'+
        '<h6>JUPITER HAS A LONG HISTORY OF SURPRISING SCIENTISTS</h6>\n'+
        '<div class="infos">\n'+
        '    <p><span class="gray">Radius:</span> 69.911 km</p>\n'+
        '    <p><span class="gray">Distance from Sun:</span> 778 million km</p>\n'+
        '    <p><span class="gray">Moons: </span>80 moons</p>\n'+
        '    <p><span class="gray">Gravity: </span>24,79 m/s²</p>\n'+
        '    <p><span class="gray">Tilt of Axis: </span>3° </p>\n'+
        '    <p><span class="gray">Lenghts of Year: </span>12 Years </p>\n'+
        '    <p><span class="gray">Lenght of Day: </span>0d 9h 56min</p>\n'+
        '    <p><span class="gray">Temperature: </span>?</p>\n'+
        '</div>',
    planet: null
}, {
    name: "SATURN",
    size: 27,
    positionX: 170.37,
    positionY: 0,
    positionZ: 0,
    texture: "assets/img/planets/2k_saturn.jpg",
    info: 
        '<h2>JUPITER</h2>\n'+
        '<h6>THE SECOND-LARGEST PLANET IN OUR SOLAR SYSTEM.</h6>\n'+
        '<div class="infos">\n'+
        '    <p><span class="gray">Radius:</span> 58.232 km</p>\n'+
        '    <p><span class="gray">Distance from Sun:</span> 1.4 billion km</p>\n'+
        '    <p><span class="gray">Moons: </span>7 moons</p>\n'+
        '    <p><span class="gray">Gravity: </span>10,44 m/s²</p>\n'+
        '    <p><span class="gray">Tilt of Axis: </span>27° </p>\n'+
        '    <p><span class="gray">Lenghts of Year: </span>29 Years </p>\n'+
        '    <p><span class="gray">Lenght of Day: </span>0d 10 h 34 min</p>\n'+
        '    <p><span class="gray">Temperature: </span>-140°C</p>\n'+
        '</div>',
    planet: null
}, {
    name: "URANUS",
    size: 18,
    positionX: 228.14,
    positionY: 0,
    positionZ: 0,
    texture: "assets/img/planets/2k_uranus.jpg",
    info: 
        '<h2>URANUS</h2>\n'+
        '<h6>URANUS IS THE SEVENTH PLANET FROM THE SUN</h6>\n'+
        '<div class="infos">\n'+
        '    <p><span class="gray">Radius:</span> 25.362 km</p>\n'+
        '    <p><span class="gray">Distance from Sun:</span> 2.8 billion km</p>\n'+
        '    <p><span class="gray">Moons: </span>27 moons</p>\n'+
        '    <p><span class="gray">Gravity: </span>8,87 m/s²</p>\n'+
        '    <p><span class="gray">Tilt of Axis: </span>97.77°</p>\n'+
        '    <p><span class="gray">Lenghts of Year: </span>84.0205 Years</p>\n'+
        '    <p><span class="gray">Lenght of Day: </span>0d 17 h 14 min</p>\n'+
        '    <p><span class="gray">Temperature: </span>-195°C</p>\n'+
        '</div>',
    planet: null
}, {
    name: "NEPTUNE",
    size: 17,
    positionX: 279.01,
    positionY: 0,
    positionZ: 0,
    texture: "assets/img/planets/2k_neptune.jpg",
    info: 
        '<h2>NEPTUNE</h2>\n'+
        '<h6>DARK, COLD, AND WHIPPED BY SUPERSONIC WINDS</h6>\n'+
        '<div class="infos">\n'+
        '    <p><span class="gray">Radius:</span> 24.622 km</p>\n'+
        '    <p><span class="gray">Distance from Sun:</span> 4.5 billion km</p>\n'+
        '    <p><span class="gray">Moons: </span>7 moons</p>\n'+
        '    <p><span class="gray">Gravity: </span>11,15 m/s²</p>\n'+
        '    <p><span class="gray">Tilt of Axis: </span>28.32°</p>\n'+
        '    <p><span class="gray">Lenghts of Year: </span>165 Years</p>\n'+
        '    <p><span class="gray">Lenght of Day: </span>0d 16 h 6 min</p>\n'+
        '    <p><span class="gray">Temperature: </span>-214°C</p>\n'+
        '</div>',
    planet: null
})