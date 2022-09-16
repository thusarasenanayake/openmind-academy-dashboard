const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
	const token = req.cookies.jwt;

	if (token) {
		// eslint-disable-next-line no-undef
		jwt.verify(token, process.env.AUTH_SECRET, (err, decodedToken) => {
			if (err) {
				res.redirect('/dashboard/login');
			} else {
				next();
			}
		});
	} else {
		res.redirect('/dashboard/login');
	}
};

const checkUser = (req, res, next) => {
	const token = req.cookies.jwt;
	if (token) {
		// eslint-disable-next-line no-undef
		jwt.verify(token, process.env.AUTH_SECRET, (err, decodedToken) => {
			if (err) {
				res.locals.user = null;
				next();
			} else {
				User.findById(decodedToken.id)
					.then((result) => {
						res.locals.user = result;
						next();
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});
	} else {
		res.locals.user = null;
		next();
	}
};

module.exports = { requireAuth, checkUser };
