// Helpers to validate login and sign up
export const isSignupDataComplete = 
  (email, password, repeate_password) =>  
  (!!email && !!password && !!repeate_password)

export const isSignupPasswordMatch = 
  (password, repeate_password) =>
  (password === repeate_password)

export const isSignupDataValid = (email, password, repeate_password) => (
  isSignupDataComplete(email, password, repeate_password) &&
  isSignupPasswordMatch(password, repeate_password)
)

export const isLoginDataValid = (email, password) => (
  !!email && !!password
)

