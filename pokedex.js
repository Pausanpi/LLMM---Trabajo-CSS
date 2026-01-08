let pokemonActual = 1;

async function cargarPokemon(id) {
	try {
		pokemonActual = id;
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const data = await response.json();
		
		// Actualizar imagen
		document.getElementById('pokemonImg').src = data.sprites.front_default || '';
		
		// Actualizar datos básicos
		document.getElementById('pokemonNombre').textContent = data.name;
		document.getElementById('pokemonId').textContent = '#' + String(data.id).padStart(3, '0');
		document.getElementById('pokemonTipo').textContent = data.types.map(t => t.type.name).join(', ');
		document.getElementById('pokemonAltura').textContent = (data.height / 10) + ' m';
		document.getElementById('pokemonPeso').textContent = (data.weight / 10) + ' kg';
		
		// Actualizar stats
		const stats = data.stats;
		actualizarStat('hp', stats[0].base_stat);
		actualizarStat('atk', stats[1].base_stat);
		actualizarStat('def', stats[2].base_stat);
		actualizarStat('spd', stats[5].base_stat);
		
	} catch (error) {
		mostrarError('Error al cargar el Pokémon. Por favor, intenta de nuevo.');
		console.error(error);
	}
}

function mostrarError(mensaje) {
	document.getElementById('errorMessage').textContent = mensaje;
	document.getElementById('errorModal').style.display = 'flex';
}

function cerrarModal() {
	document.getElementById('errorModal').style.display = 'none';
}

function actualizarStat(nombre, valor) {
	const maxStat = 255;
	const porcentaje = (valor / maxStat) * 100;
	
	document.getElementById(nombre + 'Bar').style.width = porcentaje + '%';
	document.getElementById(nombre + 'Value').textContent = valor;
	
	// Cambiar color según el valor
	const bar = document.getElementById(nombre + 'Bar');
	if (valor < 50) {
		bar.style.background = 'linear-gradient(to bottom, #ff4444, #cc0000)';
	} else if (valor < 100) {
		bar.style.background = 'linear-gradient(to bottom, #ffaa00, #ff8800)';
	} else {
		bar.style.background = 'linear-gradient(to bottom, #00ff00, #008000)';
	}
}

async function buscarPokemon() {
	const input = document.getElementById('searchInput').value.toLowerCase().trim();
	if (!input) {
		mostrarError('Por favor, ingresa un nombre o ID de Pokémon.');
		return;
	}
	
	await cargarPokemon(input);
}

function anteriorPokemon() {
	if (pokemonActual > 1) {
		cargarPokemon(pokemonActual - 1);
	}
}

function siguientePokemon() {
	if (pokemonActual < 1010) {
		cargarPokemon(pokemonActual + 1);
	}
}

function aleatorio() {
	const randomId = Math.floor(Math.random() * 1000) + 1;
	cargarPokemon(randomId);
}


window.addEventListener('DOMContentLoaded', () => {
	cargarPokemon(1);
});

// Permitir búsqueda con Enter
document.addEventListener('DOMContentLoaded', () => {
	const searchInput = document.getElementById('searchInput');
	if (searchInput) {
		searchInput.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				buscarPokemon();
			}
		});
	}
});