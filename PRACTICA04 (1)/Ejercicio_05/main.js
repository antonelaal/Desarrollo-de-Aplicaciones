const pipeline = (...transformaciones) => {
  return (valorInicial) => {
    return transformaciones.reduce((acc, transformacion) => {
      return transformacion(acc);
    }, valorInicial);
  };
};

const duplicar  = n => n * 2;
const sumarDiez = n => n + 10;
const cuadrado  = n => n ** 2;

const operacion = pipeline(duplicar, sumarDiez, cuadrado);
console.log(operacion(5));

const operacion2 = pipeline(cuadrado, duplicar, sumarDiez);
console.log(operacion2(5));