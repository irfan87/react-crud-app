let initialState = {
	title: "CRUD React & Redux",
	users: [
		{
			id: 1,
			name: "Moe Sargi",
			address: "NY",
			age: 24,
			phone_number: "0123456789",
		},
		{
			id: 2,
			name: "Ali H",
			address: "IND",
			age: 31,
			phone_number: "0123456711",
		},
		{
			id: 3,
			name: "Danny Dorito",
			address: "JPN",
			age: 29,
			phone_number: "0123456531",
		},
	],
	error: false,
};

const users = (state = initialState, action) => {
	return state;
};

export default users;
