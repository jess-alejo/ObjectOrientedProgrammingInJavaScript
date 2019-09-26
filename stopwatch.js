function Stopwatch() {
  let _duration = 0;
  let _running = false;
  let _startTime, _endTime;

  this.start = () => {
    if (_running) {
      throw new Error("Stopwatch already started.");
    }

    _running = true;
    _startTime = new Date();
  };

  this.stop = () => {
    if (!_running) {
      throw new Error("Stopwatch not yet started.");
    }
    _running = false;
    _endTime = new Date();

    const seconds = (_endTime.getTime() - _startTime.getTime()) / 1000;
    _duration += seconds;
  };

  this.reset = () => {
    _startTime = null;
    _endTime = null;
    _running = false;
    _duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: () => {
      return _duration;
    }
  });
}
