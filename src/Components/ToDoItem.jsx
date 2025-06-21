import { useRef } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


export default function ToDoItem(props) {

    
    
  return (
    <>
    <div className="mt-10 w-full md:w-[50%]  mx-auto">
 
 <div className="bg-[#F5F5DC] rounded-t  flex  gap-5 mb-5 p-2 ">
<div className="w-[60%]  p-2  ">

<ul>
  
        <li>{props.task.text}</li>


  </ul>  
   
 

</div>
<div className="flex gap-5 ">
  <button className=" rounded-lg border text-2xl font-bold border-amber-950 w-10 h-10 hover:bg-amber-500 flex justify-center text-bl" onClick={ ()=>props.handleCheck(props.task.id)}>{props.task.complete?'✔':"\u00A0"}</button>
  <button className=" rounded-lg border text-2xl font-bold border-amber-950 px-3 hover:bg-amber-500 " onClick={ ()=>props.handleEdit(props.task.id)}><MdEdit /></button>
  <button className=" font-bold rounded-lg border text-2xl border-amber-950 px-3 hover:bg-amber-500 " onClick={ ()=>props.handleDelete(props.task.id)}><MdDelete /></button>
  </div>
</div>



    

    </div>
    </>
  )
}  


