const input = document.querySelector('#todo');
const submit = document.querySelector('#submit');
const remove = document.querySelector('#remove');

submit.addEventListener('click', () => {
	if (input.value === "" ) {
		// Does nothing if the value for input is nothing.	
} else {
	remove.style.display = 'block';
	let ul = document.querySelector('.new');
	let li = document.createElement('li');
	li.textContent = input.value;
	let append = ul.appendChild(li);
	input.value = "";

remove.addEventListener('click', () => {
		ul.removeChild(li);
		remove.style.display = 'none';
	});

}



});




