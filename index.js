function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function(factor) {
    //...
  };

  this.radius = radius;

  this.draw = function() {
    computeOptimumLocation(0.1);
    // defaultLocation
    // this.radius

    console.log("draw");
  };
}

const circle = new Circle(10);
circle.draw();
