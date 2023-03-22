function isBefore(target, base) {
    let targetDate = new Date(target.split('.').reverse().join('-'));
    let baseDate = new Date(base.split('.').reverse().join('-'));
    return targetDate.getTime() < baseDate.getTime();
  }
  
  console.log(isBefore('01.01.2023', '01.02.2022')) // false
  console.log(isBefore('01.02.2022', '01.01.2023')) // true
  console.log(isBefore('01.02.2022', '01.02.2022')) // false


function getSum(prices, discount) {
  const sum = prices.reduce((total, price) => total + price, 0);
  const discountAmount = sum * discount / 100;
  const discountedSum = sum - discountAmount;
  return discountedSum;
}

console.log(getSum([100, 200, 300], 30)) // 420 
console.log(getSum([150, 250, 150], 10)) // 495 
console.log(getSum([1000], 50)) // 500 


function motivateStudents(students) {
  for (const student of students) {
    const name = student.name;
    const rate = student.rate;
    if (rate <= 3.5) {
      console.log(`${name}, учись лутше!`);
    }
  }
}

const students = [
  { name: 'Адилет',rate: 4 },
  { name: 'Азиза', rate: 3.5 },
  { name: 'Абай', rate: 5 },
  { name: 'Бексултан', rate: 3 },
];

motivateStudents(students);