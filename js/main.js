let cantidad;

function suma(a, b) {
  return parseInt(a) + parseInt(b);
}
function multiplicar(a, b) {
  return parseInt(a) * parseInt(b);
}
function restar(a, b) {
  return parseInt(a) - parseInt(b);
}
function dividir(a, b) {
  if (b != 0) {
    return parseInt(a) / parseInt(b);
  } else {
    return "No se pude dividir entre 0";
  }
}

cantidad = parseInt(
  prompt("Ingrese la cantidad de operaciones que desea realizar: ")
);
for (let i = 0; i < cantidad; i++) {
  let opcion;

  opcion = parseInt(
    prompt("Eliga 1 - Suma \n 2 - Resta \n 3 - Multiplicar \n 4 - Dividir")
  );
  switch (opcion) {
    case 1:
      alert(
        suma(
          parseInt(prompt("Ingrese el primer número a sumar")),
          parseInt(prompt("Ingrese el segundo número a sumar"))
        )
      );
      break;
    case 2:
      alert(
        restar(
          parseInt(prompt("Ingrese el número que se desea restar")),
          parseInt(prompt("Ingrese el número a restar"))
        )
      );
      break;
    case 3:
      alert(
        multiplicar(
          parseInt(prompt("Ingrese el primer número a multiplicar")),
          parseInt(prompt("Ingrese el segundo número a multiplicar"))
        )
      );
      break;
    case 4:
      alert(
        dividir(
          parseInt(prompt("Ingrese el dividendo")),
          parseInt(prompt("Ingrese el divisor"))
        )
      );
      break;
    default:
      alert("No eligío un caso valido");
  }
}
