import './App.css'
import { useState } from 'react'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'


function App() {

const [input, setInput] = useState("")
const [task, setTask] = useState([])
const [editTaskId, setEditTaskId] = useState(null)


function handleClick(e){
  setInput(e.target.value)
}



function addTodos(){
  if(input.trim() === "")return
  

if(editTaskId){
  setTask(prevTasks => prevTasks.map(t => t.id === editTaskId ? {...t, text:input}:t))

setEditTaskId(null);

}else{
  


const newTask=
  {
id:Date.now(),
text:input,
complete:false,
  }



  setTask([...task,newTask])
}
  setInput("")
  
}


function handleDelete(idToDelete){
  console.log('delete')
  setTask(prevTask => prevTask.filter(task => task.id !== idToDelete))
}



function handleEdit(id){
  const taskToEdit = task.find(t => t.id === id)
  setInput(taskToEdit.text)
  setEditTaskId(id)
  
}


function handleCheck(id){

    setTask(prevTask => prevTask.map(task => task.id === id?{...task,complete:!task.complete}:task))

}
  return (
    <>
    <div className="bg-[#DEB887] min-h-full min-w-full p-4 " >

        
<Header />      

<main>
  <section className='mb-4 md:mx-auto flex   md:justify-end'>

    <div className='flex   md:justify-end w-full'>
      <div  className='w-[70%] flex justify-end'>
<input value={input} 
type='text' 
placeholder='Add a task'  
onChange={handleClick}
className='bg-amber-100 w-full  text-black px-6 py-4 rounded-lg md:py-6 max-w-2xl  shadow-xl/30  ' />

  </div>
      <div className='m-auto w-[20%]' >
<button className='bg-[#E9967A] px-4 py-2 rounded-lg shadow-xl/30  hover:bg-orange-700 md:text-3xl ' onClick={addTodos}>{editTaskId?"save":"Add"}</button>

      </div>
    </div>
  </section>
<section className='flex justify-around w-full'>
  <ToDoList addTask={task}  newTask={input} handleDelete={handleDelete}  handleEdit={handleEdit} handleCheck={handleCheck}/>

</section>
</main>


  
    </div>
  

    </>
  )
}

export default App;