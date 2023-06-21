// Prompt the user to enter their speed
const speed = parseInt(prompt('Enter your speed:'));

const demeritPointsPerKm = 5; 

// The maximum number of demerit points
const maxDemeritPoints = 12;

// The speed limit in kilometers per hour.
 const speedLimit = 70;

 if (speed < speedLimit) {
    console.log('Ok');
 } else {
    const demeritPoints = Math.floor((speed - speedLimit)/ demeritPointsPerKm);

    if (demeritPoints > maxDemeritPoints) {
  console.log ('License cancelled')
} else {
    console.log('Points:' ,demeritPoints)
}
 }
