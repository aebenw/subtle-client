import { URL } from '../../constants'
// export const URL = "http://localhost:3000/api/v1/"

const errorAction = (error) => ({type: "LOGIN_ERROR", error})
const loginAction = (user) => ({ type: "LOGIN_USER", user})

export function loginUser(user) {
  return (dispatch) => {
    fetch(URL + "/auth", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(r => r.json())
      .then(user => {
        if(user.error) {dispatch(errorAction(user.error))}
        else {
          localStorage.setItem("jwt", user.jwt)
         dispatch(loginAction(user.user.user))
       }
      })
  }

}


export function createUser(user) {
  return (dispatch) => {
    fetch(URL + "/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(r => r.json())
      .then(user => {
        if(user.error) {dispatch(errorAction(user.error))}
        else {
          localStorage.setItem("jwt", user.jwt)
         dispatch(loginAction(user.user.user))
       }
    })
  }
}

export function fetchWithToken(token) {
  debugger
  return (dispatch) => fetch(URL + "/current_user", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token
    }
  }).then(r => r.json())
    .then(user => {
      if(user.error) {dispatch(errorAction(user.error))}
      else {
       dispatch(loginAction(user))
     }
  })
}
