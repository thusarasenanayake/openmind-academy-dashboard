const mongoose = require('mongoose');
const { isEmail } = require('validator');

const Schema = mongoose.Schema;
// indexNumber  ||  firstName  ||  lastName || email  ||  phoneNumber  ||  -year  ||  *status  ||  courseId
// console.log(JSON.stringify({indexNumber:12,firstName:'Namal',lastName:'Ranaweera',email:'email@gmail.com',phoneNumber:'1212',status:true,courseId:'EN21'}))

// this should come from an API
const availableCourses = [
	'Java Programming',
	'English Foundation',
	'AL ICT',
	'Web Development',
];

const studentSchema = new Schema(
	{
		indexNumber: {
			type: Number,
			unique: true,
			required: [true, 'Please enter a valid index number.'],
			min: 1,
			max: 99999,
		},
		firstName: {
			type: String,
			required: true,
			maxLength: 30,
		},
		lastName: {
			type: String,
			maxLength: 30,
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
			validate: {
				validator: isEmail,
			},
		},
		phoneNumber: {
			type: String,
			validate: {
				validator: function (v) {
					return /^[0][0-9]{9}$/g.test(v);
				},
			},
			required: true,
		},

		status: {
			type: Boolean,
			required: true,
			default: true,
		},
		courseId: {
			type: String,
			required: true,
			enum: {
				values: availableCourses,
			},
		},
		// year: {
		// 	type: Number,
		// 	required: [true, 'Year is required'],
		// 	min: 2014,
		// 	max: new Date().getFullYear(),
		// },
	},
	{ timestamps: true }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
