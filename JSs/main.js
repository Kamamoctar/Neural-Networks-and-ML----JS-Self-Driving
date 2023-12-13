const canvas = document.getElementById("myCanvas");
// LONGUEUR DE LA ROUTE 
canvas.height = window.innerHeight;
// LARGEUR DE LA ROUTE
canvas.width = 200;

// APPELLE DU CONTEXT
const ctx = canvas.getContext("2d");
const car = new Car(100, 100,40, 60);
car.draw(ctx);