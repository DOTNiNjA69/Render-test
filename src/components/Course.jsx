const Course=({courses})=>{
return(<>
     <h1>Web development curriculum</h1>
  {courses.map(course =>{
    return(
      <div key={course.id}>
      <h2>{course.name}</h2>
       {course.parts.map(note=>
       <div key={note.id}>{note.name} {note.exercises}</div>
       )}
       <h3>total of {course.parts.reduce((sum,exer) =>sum+exer.exercises,0)} exercises</h3>
      </div>
     
    )
    

  })}
  
</>

)
}

export default Course