const navigation = (state = 'LOGIN', action) => {
  switch (action.type) {
    case 'SWITCH_TO_LOGIN_OR_SIGNUP':
      return action.action
    default:
      return state
  }
}

export default navigation
