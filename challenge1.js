//A > 79, 
//B - 60 to 79, 
//C -  59 to 49, 
//D - 40 to 49, 
//E - less 40.

// Promps the user to enter their grade
const gradeInput = prompt('Enter your grade:');

// Converts input to a number
const gradeNumber = parseInt(gradeInput);

if (gradeNumber <=0 && gradeNumber >= 100) {
    console.log('Invalid.')
} else {
   
    let grade;
     // Determine the grade
if (gradeNumber > 79) {
grade = 'A';
} else if (gradeNumber >= 60 && gradeNumber <= 79) {
    grade = 'B';
} else if (gradeNumber >= 50 && gradeNumber <= 59) {
    grade = 'C';
} else if (gradeNumber >= 40 && gradeNumber <= 49) {
    grade = 'D';
} else if (gradeNumber <40) {
    grade = 'E';
} 
// Displays the grade number
console.log(`Grade: ${grade}`);
}