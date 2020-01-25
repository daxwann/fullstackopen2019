const initialState = {
  on: false,
  message: ""
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { on: true, message: action.data.message}
    case 'REMOVE_NOTIFICATION':
      return { on: false, message: action.data.message};
    default:
      return state;
  }
}

export const setNotification = (message) => {
  return ({
    type: 'SET_NOTIFICATION',
    data: { message }
  })
}

export const removeNotification = () => {
  return ({
    type: 'REMOVE_NOTIFICATION',
    data: { message: "" }
  })
}

export default notificationReducer;