feather.replace({ 'aria-hidden': 'true' });

window.onload = () => {
	const createStudentForm = document.querySelector('#createStudentForm');
	const indexNumber = document.querySelector('#indexNumber');
	const firstName = document.querySelector('#first_name');
	const lastName = document.querySelector('#last_name');
	const email = document.querySelector('#email');
	const phoneNumber = document.querySelector('#phone_number');
	const courseId = document.querySelector('#course_id');

	createStudentForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		e.stopPropagation();

		const frontEndValidationStatus = createStudentForm.checkValidity();
		createStudentForm.classList.add('was-validated');

		if (frontEndValidationStatus) {
			try {
				const res = await fetch(`${window.location.href}`, {
					method: 'POST',
					body: JSON.stringify({
						indexNumber: indexNumber.value,
						firstName: firstName.value,
						lastName: lastName.value,
						email: email.value,
						phoneNumber: phoneNumber.value,
						courseId: courseId.value,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				const data = await res.json();
				if (data.errors) {
					Object.keys(data.errors).forEach((errKey) => {
						if (errKey === 'indexNumber' && data.errors[errKey]) {
							indexNumber.setCustomValidity('true');
						}
						if (errKey === 'firstName' && data.errors[errKey]) {
							firstName.setCustomValidity('true');
						}
						if (errKey === 'email' && data.errors[errKey]) {
							email.setCustomValidity('true');
						}
						if (errKey === 'phoneNumber' && data.errors[errKey]) {
							phoneNumber.setCustomValidity('true');
						}
						if (errKey === 'courseId' && data.errors[errKey]) {
							courseId.setCustomValidity('true');
						}

						createStudentForm.addEventListener('keydown', (e) => {
							e.target.setCustomValidity('');
						});
						courseId.addEventListener('change', (e) => {
							courseId.setCustomValidity('');
						});
					});
				} else {
					window.location.reload();
				}
			} catch (err) {
				console.log(err);
			}
		}
	});
};
