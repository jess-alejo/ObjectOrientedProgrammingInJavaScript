function Circle(radius) {
  let _defaultLocation = { x: 0, y: 0 };

  this.radius = radius;

  this.draw = function() {
    console.log(
      "draw",
      "x",
      _defaultLocation.x,
      "y",
      _defaultLocation.y,
      "r",
      radius
    );
  };

  Object.defineProperty(this, "defaultLocation", {
    get: () => {
      return _defaultLocation;
    },
    set: value => {
      if (!value.x || !value.y) {
        throw new Error("Invalid location.");
      }

      _defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
circle.draw();
