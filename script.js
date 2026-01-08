//RELOJ

function actualizarHora() {
	const ahora = new Date();
	const horas = String(ahora.getHours()).padStart(2, '0');
	const minutos = String(ahora.getMinutes()).padStart(2, '0');
	
	document.getElementById("reloj").textContent = `${horas}:${minutos}`;
}

setInterval(actualizarHora, 1000);
actualizarHora();


// ANIMACION HUEVITO

let tiempoTotal = 0;
let tiempoRestante = 0;
let timerInterval = null;
let animationInterval = null;
let isRunning = false;

const frames = document.querySelectorAll('.animacion img');
const countdown = document.getElementById('countdown');
const botonesOpcion = document.querySelectorAll('.boton-opcion');
const botonPlay = document.querySelector('.boton-timer:first-child');
const botonStop = document.querySelector('.boton-timer:last-child');

let currentFrame = 0;

const tiempos = {
	'Pasado': 1,    // está puesto 1seg para probar que funcione el temporizador, serían 180
	'Blando': 240,
	'Medio': 360,
	'Duro': 480
};

function formatTime(seconds) {
	const mins = Math.floor(seconds / 60);
	const secs = seconds % 60;
	return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function showFrame(index) {
	frames.forEach((frame, i) => {
		if (i === index) {
			frame.classList.add('active');
		} else {
			frame.classList.remove('active');
		}
	});
}

showFrame(0);

function startAnimation() {
	if (animationInterval) return;
	
	animationInterval = setInterval(() => {
		currentFrame = (currentFrame + 1) % frames.length;
		showFrame(currentFrame);
	}, 200);
}

function stopAnimation() {
	if (animationInterval) {
		clearInterval(animationInterval);
		animationInterval = null;
	}
	currentFrame = 0;
	showFrame(0);
}

function startTimer() {
	if (isRunning || tiempoRestante === 0) return;
	
	isRunning = true;
	startAnimation();
	
	timerInterval = setInterval(() => {
		tiempoRestante--;
		countdown.textContent = formatTime(tiempoRestante);
		
		if (tiempoRestante <= 0) {
			stopTimer();
			showModal();
		}
	}, 1000);
}

function stopTimer() {
	isRunning = false;
	
	if (timerInterval) {
		clearInterval(timerInterval);
		timerInterval = null;
	}
	
	stopAnimation();
	tiempoRestante = 0;
	tiempoTotal = 0;
	countdown.textContent = '00:00';
}

botonesOpcion.forEach(boton => {
	boton.addEventListener('click', () => {
		if (isRunning) return;
		
		const opcion = boton.textContent;
		tiempoTotal = tiempos[opcion];
		tiempoRestante = tiempoTotal;
		countdown.textContent = formatTime(tiempoRestante);
		
		botonesOpcion.forEach(b => b.style.fontWeight = '600');
		boton.style.fontWeight = 'bold';
	});
});

botonPlay.addEventListener('click', startTimer);
botonStop.addEventListener('click', stopTimer);

// MODAL
function showModal() {
	const modal = document.getElementById('modalTimeUp');
	modal.style.display = 'flex';
}

function closeModal() {
	const modal = document.getElementById('modalTimeUp');
	modal.style.display = 'none';
}

// MODAL
function showModal() {
	const modal = document.getElementById('modalTimeUp');
	modal.style.display = 'flex';
}

function closeModal() {
	const modal = document.getElementById('modalTimeUp');
	modal.style.display = 'none';
}
