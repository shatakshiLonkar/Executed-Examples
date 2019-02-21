

exports.ADD_TODO = 'ADD_TODO'
exports.TOGGLE_TODO = 'TOGGLE_TODO'
exports. SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


exports.VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

exports.addTodo=function(text) {
 
  return { type:'ADD_TODO', text }
}

exports.toggleTodo=function(index) {
  
  return { type: 'TOGGLE_TODO', index }
}

exports.setVisibilityFilter=function(filter) {
  
  return { type:'SET_VISIBILITY_FILTER', filter }
}
