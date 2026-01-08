let pantalla = document.getElementById("pantalla");
let operacionActual = '';
let operacionPendiente = '';
let operador = '';
let ralphCount = 0;
let resultadoMostrado = false;

function agregarNumero(numero) {
	if (resultadoMostrado) {
		pantalla.innerText = '0';
		operacionActual = '';
		resultadoMostrado = false;
	}
	
	if (pantalla.innerText === '0' && numero !== '.') {
		pantalla.innerText = numero;
	} else {
		pantalla.innerText += numero;
	}
}

function operacion(oper) {
	if (pantalla.innerText !== '') {
		if (operacionActual && operador) {
			calcular();
		}
		operacionActual = pantalla.innerText;
		operador = oper;
		pantalla.innerText = '';
	}
}

function calcular() {
	if (pantalla.innerText !== '' && operacionActual !== '') {
		operacionPendiente = pantalla.innerText;
		let resultado;

		if (operacionActual === '1' && operacionPendiente === '1' && operador === '+') {
			ralphCount++;
			if (ralphCount === 1)
				resultado = "El fantástico Ralph";
			else if (ralphCount === 2)
				resultado = "Sigue siendo Ralph";
			else if (ralphCount >= 3)
				resultado = "Deja de sumar a Ralph";
		}
		else {
			switch (operador) {
				case '+':
					resultado = parseFloat(operacionActual) + parseFloat(operacionPendiente);
					break;
				case '-':
					resultado = parseFloat(operacionActual) - parseFloat(operacionPendiente);
					break;
				case '*':
					resultado = parseFloat(operacionActual) * parseFloat(operacionPendiente);
					break;
				case '/':
					resultado = parseFloat(operacionActual) / parseFloat(operacionPendiente);
					break;
			}
		}
		

		pantalla.innerText = resultado;
		operacionActual = resultado.toString();
		operacionPendiente = '';
		operador = '';
		resultadoMostrado = true;
	}
}

function limpiar() {
	pantalla.innerText = '0';
	operacionActual = '';
	operacionPendiente = '';
	operador = '';
	resultadoMostrado = false;
}