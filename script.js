const weight = prompt('What is your weight?'); 
const height = prompt('What is your height?'); 
const bodyMassIndex = weight / Math.pow(height,2); /* математическая конструкция где мы делим вес на рост в квадрате отсюда 2 после запятой - это квадрат */ 

const areYouOverweight = bodyMassIndex >=25; 

if (areYouOverweight) {
console.log(`Yes, your BMI more than normal by ${bodyMassIndex -25}`); alert (`Yes, your BMI more than normal by ${bodyMassIndex -25}`)}


else { console.log(`No, your weight is normal`);alert (`No, your weight is normal`); } 



