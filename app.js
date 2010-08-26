const btn = document.getElementById('btn');
const pos_field = document.getElementById('pos-field');
const neg_field = document.getElementById('neg-field');

btn.addEventListener('click', (e) => {
	e.preventDefault();
	const a = document.getElementById('input-path-a').value;
	const b = document.getElementById('input-path-b').value;
	const c = document.getElementById('input-path-c').value;

	var base_result = Math.sqrt(Math.abs(Math.pow(b, 2) - 4*a*c));

	const pos_result = ((-b) + base_result) / (2*a);
	const neg_result = ((-b) - base_result) / (2*a);

	pos_field.innerHTML = pos_result;
	neg_field.innerHTML = neg_result;
})