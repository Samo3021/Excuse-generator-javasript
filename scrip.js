let who = ['The dog','My grandma','His turtle','My bird']; 
let parte1 = Math.floor(Math.random()* who.length);
let action = ['ate','peed','crushed','broke']
let parte2 = Math.floor(Math.random()* action.length);
let what = ['my homework', 'the keys', 'the car']
let parte3= Math.floor(Math.random()* who.length);
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying']
let parte4 = Math.floor(Math.random()* who.length);
 
document.querySelector("#excuse").innerHTML= who[parte1] + "" + action[parte2] + "" + what[parte3] + "" + when[parte4];



