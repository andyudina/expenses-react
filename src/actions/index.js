// Login/SignUp view actions

export const switchToLoginOrSignup = (action) => ({
  type: 'SWITCH_TO_LOGIN_OR_SIGNUP',
  action: action
})



export const switchToNewView = (action) => ({
  type: 'SWITCH_TO_NEW_VIEW',
  action: action
})

export const cleanSuccessfullyUploadedState = () => ({
  type: 'CLEAN_SUCCESSFULLY_UPLOADED_FILES'
})