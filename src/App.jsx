import { use, useState } from "react"
  const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood=()=>{
   setGood(good+1)
   console.log(good)
  }

  const handleNeutral=()=>{
   setNeutral(neutral+1)
   console.log(neutral)
  }

  const handleBad=()=>{
    setBad(bad+1)
    console.log(bad)
  }

  return (<>
   <h1>give feedback</h1>
   <Button name="good" onChange={handleGood}/>
   <Button name="neutral" onChange={handleNeutral}/>
   <Button name="bad" onChange={handleBad}/>
   <Statistics good={good} neutral={neutral} bad={bad}/>
  </>
  )
}

  const Statistics=({good,neutral,bad})=>{
  const total=good+neutral+bad
  const average=good-bad/total
  const positive=good/total
  if(total==0){
    return(
      <>
      <h1>statistics</h1>
      <div>No feedback given</div>
      </>
    )
  }
  return(
    <>
       <h1>statistics</h1>
       <table>
        <tbody>
       <StatisticLine text="good" value={good}/>
       <StatisticLine text="neutral" value={neutral}/>
       <StatisticLine text="bad" value={bad}/>
       <StatisticLine text="all" value={total}/>
       <StatisticLine text="average" value={average}/>
       <StatisticLine text="positive" value={positive}/>
        </tbody>
       </table>
       
    </>
  )
}

const StatisticLine =({text,value})=>{
  return(
    <>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    </>
  )
}

const Button=({name,onChange})=>{
return( <button onClick={onChange}>{name}</button>)
}

export default App
