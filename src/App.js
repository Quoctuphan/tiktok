import clsx from 'clsx'
import {useStore, actions} from './store'
//(1)
function App() {
  const [state, dispatch] = useStore()
  const {todos,todoInput} = state
  const handleAdd = () => {
      dispatch(actions.addTodo(todoInput))
  }
  return(
    <div style={{padding:'10px 32px'}}>
      <input value={todoInput}
        placeholder='Enter todo...'
        onChange={ e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      
      />
        
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (<li key={index} >{todo}</li>))}
    </div>
  )
}

export default App;
