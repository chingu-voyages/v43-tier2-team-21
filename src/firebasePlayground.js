const signup = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBs2CqQXXU3zdnT0x9fFOXeGIrpELVYAc4"
const login ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBs2CqQXXU3zdnT0x9fFOXeGIrpELVYAc4"

//userDetails
const test ={
	email: "testing@gmail.com",
	pass:"testing123",
};
const matt ={
	email: "matthewrueter51@gmail.com",
	pass:"testing123",
};

function createUser(userDetails) {
	fetch(signup, {
		method: "POST",
		body: JSON.stringify({
			email: userDetails.email,
			password: userDetails.pass,
			returnSecureToken: true,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	})
	.then((response) => response.json())
	.then((data) => console.log(data));	
}

function loginUser(userDetails){
	fetch(login, {
		method: "POST",
		body: JSON.stringify({
			email: userDetails.email,
			password: userDetails.pass,
			returnSecureToken: true,
		}),
		headers:{
			"Content-Type": "application/json",
		}
	})
	.then((response) => response.json())
	.then((data) => console.log(data));
}



//READING
const User1id = "OXEeBhhuvdMr0a4dIbAevf82O9H2";
const User2id = "Ucep7DdGfiVrgkgtZEnuuXfKmPv1";

const getDB = (currentUser) =>{
	fetch(`https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/${currentUser}.json?print=pretty`)
	.then((response) => response.json())
	.then((data) => console.log(data));
};
getDB(User2id);



