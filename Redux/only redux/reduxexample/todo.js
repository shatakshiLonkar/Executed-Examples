const { createStore }=require('redux');

  
   
  function visibilityFilter(state = 'SHOW_ALL', action) {
    const newState={...state};

    if (action.type === 'SET_VISIBILITY_FILTER') {
      return action.filter
    } else {
      return state
    }
  }
  
  function todos(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([{ text: action.text, completed: false }])
      case 'TOGGLE_TODO':
        return state.map(
          (todo, index) =>
            action.index === index
              ? { text: todo.text, completed: !todo.completed }
              : todo
        )
      default:
        return state
    }
  }
  function todoApp(state = {}, action) {
    return {
      todos: todos(state.todos, action),
      visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
  }

const store =createStore(todoApp);
store.subscribe(()=>{
    console.log('State change'+JSON.stringify(store.getState()));
})

  store.dispatch( { type: 'ADD_TODO', text: 'Go to swimming pool' })
  store.dispatch({ type: 'TOGGLE_TODO', index: 1 })
  store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' })
  store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' })

  store.dispatch({
    type: 'COMPLETE_TODO',
    index: 1
  })