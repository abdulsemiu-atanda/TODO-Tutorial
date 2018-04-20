export const asyncNames = baseName => ({
  failure: `${baseName}_FAILURE`,
  loading: `${baseName}_LOADING`,
  success: `${baseName}_SUCCESS`
})

export const asyncActions = actionName => ({
  failure: (bool, error) => ({
    type: asyncNames(actionName).failure,
    data: {error, status: bool}
  }),
  loading: bool => ({
    type: asyncNames(actionName).loading,
    data: bool
  }),
  success: data => ({
    type: asyncNames(actionName).success,
    data
  })
})

export const asyncRequest = (ACTION_NAME, data) => dispatch => {
  dispatch(asyncActions(ACTION_NAME).loading(true))

  // To mock an error, we'll add a check to see if TODO title is empty and dispatch an error
  if (data.title === '')
    dispatch(asyncActions(ACTION_NAME).failure(true, 'Title cannot be empty'))
  else {
    // To mock API call, we'll use a setTimeout here
    setTimeout(() => {
      dispatch(asyncActions(ACTION_NAME).success(data))
      dispatch(asyncActions(ACTION_NAME).loading(false))
    }, 2000)
  }
}