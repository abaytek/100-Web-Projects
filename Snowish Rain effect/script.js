
function createText(){
	const text = document.createElement('div');
	text.classList.add('text');
	text.innerText = '.';
	text.style.left = Math.random() * 100 + 'vw';
	document.body.appendChild(text);
}

setInterval(createText, 300);