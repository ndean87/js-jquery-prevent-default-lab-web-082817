window.onload = () => {
	const submit = document.getElementsByClassName('submit-button')[0];
	const list = document.getElementsByClassName('list-items')[0];
	const error = document.getElementsByClassName('error')[0];

	submit.addEventListener('click', event => {
		event.preventDefault();
		const inputValue = document.getElementsByClassName('input-field')[0].value;
		const categoryValue = document.getElementsByClassName('category')[0].value;

		if (!inputValue) {
			error.innerHTML = 'You didnt enter a task!';
		} else if (!categoryValue) {
			error.innerHTML = 'You didnt choose a category!';
		} else {
			error.innerHTML = '';
			const li = document.createElement('li');
			li.innerHTML = `${categoryValue}: ${inputValue}`;
			list.appendChild(li);
			document.getElementsByClassName('input-field')[0].value = '';
		}
	});
};
