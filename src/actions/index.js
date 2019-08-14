

export const COUNTER_BUTTON_PRESS_ACTION_TYPE = 'COUNTER_BUTTON_PRESS_ACTION_TYPE'
export const counterButtonPressAction = () => dispatch => {
  dispatch({
   type: COUNTER_BUTTON_PRESS_ACTION_TYPE,
   payload: Date.now()
  })
 }

 export const VOLUME_CHANGE_ACTION_TYPE = 'VOLUME_CHANGE_ACTION_TYPE'
 export const volumeChangeAction = (volume) => dispatch => {
   dispatch({
    type: VOLUME_CHANGE_ACTION_TYPE,
    payload: volume
   })
  }

  export const RESET_COUNTER_ACTION_TYPE = 'RESET_COUNTER_ACTION_TYPE'
  export const resetCounterAction = () => dispatch => {
    dispatch({
     type: RESET_COUNTER_ACTION_TYPE
    })
   }
