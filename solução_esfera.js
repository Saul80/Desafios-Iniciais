 var input = require("fs").readFileSync("stdin", "utf8"); 
 
 var raio = parseFloat(input);
 
 var PI = 3.14159;

 var Esfera = (4/3.0) * PI * Math.pow(raio, 3); 

 console.log("VOLUME = " + Esfera.toFixed(3));
