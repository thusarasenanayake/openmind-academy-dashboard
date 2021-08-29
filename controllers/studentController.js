const Student = require('../models/Student');

const availableCourses = [
	'Java Programming',
	'English Foundation',
	'AL ICT',
	'Web Development',
];

const handleErrors = (err) => {
	const errors = {
		indexNumber: '',
		firstName: '',
		email: '',
		phoneNumber: '',
		courseId: '',
	};
	if (err._message === 'Student validation failed') {
		Object.values(err.errors).forEach((err) => {
			errors[err.path] = err.message;
			return errors;
		});
	}
	if (err.code === 11000) {
		errors.indexNumber = 'Index number already registered';
	}
	return errors;
};

// also includes  filters and searches
const student_index = (req, res) => {
	const parameters = { status: true };
	let searchTerm = '';

	if (availableCourses.includes(req.query.courseId)) {
		parameters.courseId = req.query.courseId;
	}
	if (req.query.q) {
		searchTerm = req.query.q;

		const searchTermRegex = req.query.q.trim().replace(' ', '|');
		parameters.$and = [
			{
				$or: [
					{ firstName: { $regex: new RegExp(`${searchTermRegex}`, 'i') } },
					{ lastName: { $regex: new RegExp(`${searchTermRegex}`, 'i') } },
					{
						indexNumber: parseInt(searchTermRegex)
							? parseInt(searchTermRegex)
							: 0,
					},
				],
			},
		];
	}

	Student.find(parameters)
		.sort({ indexNumber: 1 })
		.then((result) => {
			res.render('./students/index', {
				title: 'Students',
				students: result,
				searchTerm,
				category: parameters.courseId || 'All',
			});
		})
		.catch((err) => {
			res.render('./404');
		});
};

const student_create_get = (req, res) => {
	res.render('./students/create');
};

const student_details = (req, res) => {
	const id = req.params.id;
	Student.findById(id)
		.then((result) => {
			res.render('./students/details', {
				student: result,
			});
		})
		.catch((err) => {
			// res.status(500).json({ errors: { message: 'Page not found!' } });
			res.render('./404');
		});
};

const student_delete = (req, res) => {
	const id = req.params.id;
	Student.findByIdAndDelete(id)
		.then(() => res.json({ message: 'Successful' }))
		.catch((err) => {
			res.render('./404');
		});
};

const student_edit_get = (req, res) => {
	const id = req.params.id;
	Student.findById(id)
		.then((result) => {
			res.render('./students/edit', { student: result });
		})
		.catch((err) => {
			res.render('./404');
		});
};
const student_create_post = (req, res) => {
	const student = new Student(req.body);
	student
		.save()
		.then((result) => res.json(result))
		.catch((err) => {
			const errors = handleErrors(err);
			res.json({ errors });
		});
};
const student_edit_post = (req, res) => {
	const id = req.params.id;
	const student = req.body;
	Student.findByIdAndUpdate(id, student)
		.then((result) => res.json(result))
		.catch((err) => {
			const errors = handleErrors(err);
			res.json({ errors });
		});
};

module.exports = {
	student_index,
	student_create_get,
	student_details,
	student_delete,
	student_edit_get,
	student_create_post,
	student_edit_post,
};
