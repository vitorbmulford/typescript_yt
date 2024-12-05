// REST com SPREAD --- Tipos de for
// Praticamente args e kwargs do python

function fsoma(...n: number[]) {
  let s: number = 0;

  for (let item of n) {
    s += item;
  }
  for (let index in n) {
    console.log(index);
  }
  n.forEach((item, index) => {
    console.log(index, item);
  });

  const doubled = n.map((item) => item * 2);
  const evenNumbers = n.filter((item) => item % 2 === 0);

  console.log(`double ${doubled}, even ${evenNumbers}`);

  return s;
}

console.log(fsoma(10, 20));
