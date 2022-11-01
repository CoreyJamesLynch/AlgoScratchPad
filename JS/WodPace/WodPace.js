
const wodPace = (workout, targetTime) => {
  let pace = []; // holds modified values from workout
  let elapsedTime = 0; // time accumulation
  let reps = workout.reduce((a, b) => a + b, 0); // sums values of workout
  let targetSeconds = parseInt(targetTime * 60); // target time -> seconds *refactor*
  let repTime = targetSeconds / reps;

  for (let idx = 0; idx < workout.length; idx += 1) {
    elapsedTime += (workout[idx] * repTime)
    let formattedTime = timeFormatter(elapsedTime);
    pace.push(formattedTime);
  }
  return pace;
};

const timeFormatter = (seconds) => {
  let min = parseInt(seconds / 60);
  let sec = parseInt(seconds % (60));

  if(sec === 0) sec = '00';

  let time = `${min.toString()}:${sec.toString()}`

  return time;
}

// TESTS
console.log(wodPace([25, 35, 45, 55, 65], 15.0));
// -> ['1:40',' 4:00', '7:00', '10:40', '15:00']