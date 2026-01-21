// {name: 'awdvcv', username: '', email: 'a@gmail.com', password: ''}

function validateSignup({name, username, email, password}){
  const errorData = {} 
  const regex = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  const isValid = regex.test(email);

  if (!name.trim()) {
    errorData["name"] = "Name must have"
  } 

  if (!username.trim()) {
    errorData["username"] = "Username must have"
  } 

  if (!email.trim()) {
    errorData["email"] = "Email must have"
  } else if (!isValid) {
    errorData["email"] = "Email must be a valid email"
  }

  // in the future we will validate that "Email is already taken, Please try another email."

  if (!password.trim()) {
    errorData["password"] = "Password must have"
  } else if (password.length < 6) {
    errorData["password"] = "Password must be at least 6 characters"
  }

  return errorData
}

export default validateSignup