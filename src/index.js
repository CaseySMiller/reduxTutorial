import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'

import './api/server'

console.log('initial state: ', store.getState())
// {todos: [....],  filters: {status, colors}}

const unsubscribe = store.subscribe(() => 
  console.log('State after dispatch: ', store.getState())
)

//dipatch some stuff
store.dispatch({ type: 'todos/todoAdded', payload: 'arrrr this be a todo' })
store.dispatch({ type: 'todos/todoAdded', payload: 'arrrr this be another todo' })
store.dispatch({ type: 'todos/todoAdded', payload: 'arrrr this be a third todo' })

// store.dispatch({ type: 'todos/todoToggled', payload: 0 })
// store.dispatch({ type: 'todos/todoToggled', payload: 1 })

// store.dispatch({ type: 'filters/statusFilterChanged', payload: "Active" })

// store.dispatch({ 
//   type: 'filters/colorFilterChanged', 
//   payload: { color: 'red', changeType: 'added' }
// })

//stop listening
unsubscribe();

// store.dispatch({ type: 'todos/todoAdded', payload: 'bet this wont work' })


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
