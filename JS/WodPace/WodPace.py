# PROBLEM
# It's the Crossfit Open and Dave Castro just released a workout, 20.2, to the world community that is the same as a workout in 2017. My time in 2017 was just over 15min so this year I want to be able to complete the workout in 15min flat this year. Create a function that will calculate how long each part of the workout should take someone to hit their target pace time.

# DESCRIPTION
# The function wodPace should take two arguments. 
# The first argument will be an array of integers whose length represents the parts of the workout and whose elements represent the exercise repetitions in that part of the workout. 
# The second argument will be an integer representing a persons target time in minutes to complete the workout.
# wodPace should return an array of floats representing the latest possible time on the clock the athlete will need to finish before to achieve their target time.

def wodPace (workout, targetTime):
  pace = []
  elapsedTime = 0
  reps = sum(workout)
  targetSeconds = int(targetTime * 60)
  repTime = targetSeconds / reps

  for reps in workout:
    elapsedTime += reps * repTime
    formattedTime = timeFormatter(elapsedTime)
    pace.append(formattedTime)
  
  return pace

def timeFormatter (seconds):
  min = int(seconds / 60)
  sec = int(seconds % 60)

  if(sec == 0): sec = '00'

  time = f"{str(min)}:{str(sec)}"

  return time

# TESTS
print(wodPace([25, 35, 45, 55, 65], 15.0))
# -> ['1:40',' 4:00', '7:00', '10:40', '15:00']

# EXAMPLE 
# wodPace([25, 35, 45, 55, 65], 15) -> [1.40, 4.00, 7.00, 10.40, 15.00]

# There are 225 repetitions total in the workout (25 + 35 + 45 + 55 + 65 = 225) and 900 seconds total in the target time. In order to finish the workout in 900 seconds each repetition shouldn't take more than 4 seconds (900 / 225). Knowing how longs each repetitions should take and how many repetitions are in each round and how many rounds are in the workout we can find the maximum amount of seconds each round needs to be completed in by multiplying our workout round array elements by the max time each repetition can take [100, 140, 180, 220, 260] (100 + 140 + 180 + 220 + 260 = 900). Now we just need to convert our array values to represent a progressive time so it's readable by our athlete and coach. To do this we will make each successive value of the array the sum of the previous values, [100, 240, 420, 640, 900]. Lastly, to get our target return, we will divide each value by 60 to get the minutes, keeping the remainder as the seconds and representing in the array like [1.40] (100 / 60 = 1r40).
