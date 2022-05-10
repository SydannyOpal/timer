const timer = process.argv.slice(2);
const delayAlarm = function(delay) {
  setTimeout(function() {
    process.stdout.write('\x07');
  }, delay * 1000);
};
const timerN = function(times) {
  for (let beep of times) {
    delayAlarm(beep);
  }
};
timerN(timer);