// Arrow Function

const teste = (txt?: string): void => {
  console.log(txt);
};

const fsoma2 = (...n: number[]): void => {
  let soma: number = 0;

  for (let i = 0; i < 1000; i++) {
    n.push(i);
  }
  const double = n.map((item) => item * 2);
  n.forEach((item) => {
    soma += item;
  });
  console.log(soma);
  console.log(`Double ${double}`);
};

// teste("CFBCrusos");
// teste("Curso de Typescript");
// teste("Youtube");
// teste();
fsoma2();
