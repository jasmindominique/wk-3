new SecretFieldWatcher({
	name: 'full_name', 
	value:'Porter', 
	backgroundColor:'brown'
})
new SecretFieldWatcher({
	name: 'full_name', 
	value:'Taco', 
	backgroundColor:'pink',
	errorMessage: "Invalid Email",
})
new SecretFieldWatcher({
	name: "email", 
	value:"test@test.com", 
	backgroundColor:"green",
	errorMessage: "Invalid Email",
})
