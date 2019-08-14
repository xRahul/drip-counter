import { COUNTER_BUTTON_PRESS_ACTION_TYPE, VOLUME_CHANGE_ACTION_TYPE, RESET_COUNTER_ACTION_TYPE } from '../actions'

const defaultState = {
  volume: 100,
  buttonPressHistory: []
}

export const appReducer = (state = Object.assign({}, defaultState), action) => {
  switch (action.type) {
    case COUNTER_BUTTON_PRESS_ACTION_TYPE:
      return Object.assign({}, state, {
        buttonPressHistory: [action.payload].concat(state.buttonPressHistory)
      })
    case VOLUME_CHANGE_ACTION_TYPE:
      return Object.assign({}, state, {
        volume: action.payload
      })
    case RESET_COUNTER_ACTION_TYPE:
      return Object.assign({}, defaultState)
   default:
    return state
  }
 }