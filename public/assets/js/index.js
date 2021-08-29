feather.replace({ 'aria-hidden': 'true' });

function dropbtn() {
	document.querySelector('#filter').classList.toggle('show');
}
function deleteStudent(id) {
	const endpoint = `/dashboard/students/${id}`;
	fetch(endpoint, {
		method: 'DELETE',
	})
		.then((res) => {
			location.reload();
		})
		.catch((e) => console.log(err));
}
window.onload = function () {
	// setting dynamic urls and hrefs
	if (window.location.search) {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const params = Object.fromEntries(urlSearchParams.entries());

		if (params.q) {
			const filterLinks = document.querySelectorAll('.filter_links');
			filterLinks.forEach((link) => {
				const currentLink = link.href;
				if (link.id === 'filter_links_all') {
					link.href = `${currentLink}?q=${params.q}`;
				} else {
					link.href = `${currentLink}&q=${params.q}`;
				}
			});
		}
		if (params.courseId) {
			const searchBar = document.querySelector('#searchBar');
			const hiddenInput = document.createElement('input');
			hiddenInput.setAttribute('type', 'hidden');
			hiddenInput.setAttribute('name', 'courseId');
			hiddenInput.setAttribute('value', params.courseId);
			searchBar.appendChild(hiddenInput);
		}
	}
};
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		let dropdowns = document.querySelectorAll('.dropdown-content');
		for (let i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
				openDropdown.classList.add('text-warning');
			}
		}
	}
};
