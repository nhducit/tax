var program = require('commander');
//
program
  .version('0.0.1')
  .option('-d, --dependencies <n>', 'An integer argument', parseInt)
  .option('-s, --salary <n>', 'A float argument', parseFloat)
  .parse(process.argv);
var taxedSalary = program.salary - (9 + (program.dependencies || 0) * 3.6);

function findTax(taxedSalary){
  var tax = 0;
  if(taxedSalary <= 5){
    tax = taxedSalary * 0.05;
  }else if(taxedSalary <= 10) {
    tax = taxedSalary * 0.10 - 0.25;
  } else if(taxedSalary <= 18){
    tax = taxedSalary * 0.15 - 0.75;
  }else if (taxedSalary <= 32){
    tax = taxedSalary * 0.20 - 1.65;
  }else if (taxedSalary <= 52){
    tax = taxedSalary * 0.25 - 3.25;
  }else if (taxedSalary <= 80){
    tax = taxedSalary * 0.3 - 5.85;
  }else {
    tax = taxedSalary * 0.35 - 9.85;
  }
  return tax;
}


console.log('Tax for your salary %j%s is:', program.salary, program.dependencies ? program.dependencies + ' dependencies' : '' , findTax(taxedSalary));



