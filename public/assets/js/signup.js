feather.replace();
const form = document.querySelector('form');
const emailLabel = document.querySelector('#emailLabel');
const passwordLabel = document.querySelector('#passwordLabel');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	// resetting
	emailLabel.textContent = 'Email address';
	emailLabel.classList.remove('text-danger');
	passwordLabel.textContent = 'Password';
	passwordLabel.classList.remove('text-danger');

	const email = form.email.value;
	const password = form.password.value;

	try {
		const res = await fetch('/dashboard/signup', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();
		if (data.errors) {
			if (data.errors.email) {
				emailLabel.textContent = data.errors.email;
				emailLabel.classList.toggle('text-danger');
			}
			if (data.errors.password) {
				passwordLabel.classList.toggle('text-danger');
				passwordLabel.textContent = data.errors.password;
			}
		}
		if (data.user) {
			location.assign('/');
		}
	} catch (err) {
		console.log(err);
	}
});
