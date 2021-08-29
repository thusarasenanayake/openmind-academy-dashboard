const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
	const errors = { email: '', password: '' };

	if (err._message === 'User validation failed') {
		Object.values(err.errors).forEach((err) => {
			errors[err.path] = err.message;
			return errors;
		});
	}
	if (err.code === 11000) {
		errors.email = 'Email already registered';
	}
	if (err.message === 'Incorrect email') {
		errors.email = 'Incorrect email';
		return errors;
	}
	if (err.message === 'Incorrect password') {
		errors.password = 'Incorrect password';
		return errors;
	}
	return errors;
};
const maxAge = 60 * 60 * 24 * 10;
const createToken = (id) => {
	return jwt.sign({ id }, process.env.AUTH_SECRET, { expiresIn: maxAge });
};

const login_get = (req, res) => {
	res.render('./auth/login');
};
const login_post = (req, res) => {
	const { email, password } = req.body;
	User.login(email, password)
		.then((result) => {
			const token = createToken(result._id);
			res.cookie('jwt', token, {
				httpOnly: true,
				maxAge: maxAge * 1000,
				sameSite: 'Strict',
				secure: true,
			});
			res.status(201).json({ user: result._id });
		})
		.catch((err) => {
			const errors = handleErrors(err);
			res.status(401).json({ errors });
		});
};
const signup_get = (req, res) => {
	res.render('./auth/signup');
};

const signup_post = (req, res) => {
	const user = new User(req.body);
	user
		.save()
		.then((result) => {
			const token = createToken(result._id);
			res.cookie('jwt', token, {
				httpOnly: true,
				maxAge: maxAge * 1000,
				sameSite: 'Strict',
				secure: true,
			});
			res.status(201).json({ user: result._id });
		})
		.catch((err) => {
			const errors = handleErrors(err);
			res.status(401).json({ errors });
		});
};
const logout_get = (req, res) => {
	res.cookie('jwt', '', { maxAge: 1 });
	res.redirect('/dashboard/login');
};

module.exports = {
	login_get,
	login_post,
	signup_get,
	signup_post,
	logout_get,
};
