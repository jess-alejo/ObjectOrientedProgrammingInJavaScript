function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const circle = new Circle(10);

// get all properties
for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}

// another way of getting properties
const keys = Object.keys(circle);
console.log(keys);

// has given property?
if ("radius" in circle) {
  console.log("Circle has a radius");
}
