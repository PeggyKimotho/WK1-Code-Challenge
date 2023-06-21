
let taxRate = 0.15;
let nhifRate = 0.02;
let nssfRate = 0.06;


// Add user inputs
let basicSalary = parseFloat(prompt("Enter your basic salary:"));
let benefits = parseFloat(prompt("Enter the value of benefits:"));

// Calculate gross salary
let grossSalary = basicSalary + benefits;

// Calculate payee (tax)
let payee = grossSalary * taxRate;

// Calculate NHIF deductions
let nhifDeductions = grossSalary * nhifRate;

// Calculate NSSF deductions
let nssfDeductions = grossSalary * nssfRate;

// Calculate net salary
let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

// Display the results
console.log("Gross Salary: " + grossSalary);
console.log("Payee (Tax): " + payee);
console.log("NHIF Deductions: " + nhifDeductions);
console.log("NSSF Deductions: " + nssfDeductions);
console.log("Net Salary: " + netSalary);