/* SUMMARY 
-> Game starts with consecutively numbered clouds
-> Clouds can be thunderheads or cumulus
-> The player can jump on any cloud having a number equal to the number of current cloud plus 1 or 2.
-> The player must avoid all thunderheads.
-> Each game, input will be arr of ints (clouds).
-> Clouds will be 0 (cumulus) or 1 (thunderhead).
-> The number of each cloud will be it's index.
-> The path taken will be represented by the indices of the clouds along the shortest path.

OBJECTIVE
-> Return the minimum number of jumps it will take to jump from the starting position to the last cloud.

CONSTRAINTS
-> It will always be possible to win the game.
-> There will be no more than 100 clouds at a time.
-> There will be no less than 2 clouds at a time.
-> Each cloud can only be a 0 or 1.

EXAMPLE
clouds = [0, 1, 0, 0, 0, 1, 0]
0 -> 2 -> 4 -> 6 (3) or 0 -> 2 -> 3 -> 4 -> 6 (4) 
// -> Return 3
*/
