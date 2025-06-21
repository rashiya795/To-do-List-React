import ToDoItem from "./ToDoItem"

export default function ToDoList(props) {
  return (
    <div className=" w-[100%] p-2">
{props.addTask.map((taskItems)=>(
      <ToDoItem
      key={taskItems.id}
      task={taskItems}
      handleDelete={props.handleDelete}
      handleEdit={props.handleEdit}
      handleCheck={props.handleCheck}
      />
)
)}

</div>
  )
}
