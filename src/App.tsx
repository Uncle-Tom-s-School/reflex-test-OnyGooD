import { use, useEffect, useState } from "react"

const App = () => {
  const [randomSzam, setRandom] = useState(Math.floor(Math.random()*10))
  const [time, setTime] = useState(0)
  const [waitTime, setWaitTime] = useState(0)
  const [isStopped, setStop] = useState(false)

  useEffect(()=>{
    if(isStopped) return
    const intervalId = setInterval(()=>{
      setTime(prev => (prev+1))
    },8) //eredetileg 10 volt, de nagyjából így jön ki időben rendesen
    return () => {clearInterval(intervalId)}
  },[isStopped])

  useEffect(()=>{
    const varakozas = setInterval(()=>{
      setWaitTime(prev => (prev+1))
    },1000)
  },[isStopped])


  return (
    <div>
      {waitTime > randomSzam ?
      <div className="zoldDoboz">
        <h1>A te időd:</h1>
        {time - (randomSzam*100)}ms
        <button onClick={()=>{setStop(prev =>!prev)}}>KATTINTS!</button>
        <button onClick={()=>{window.location.href=window.location.href}}>Új teszt</button>
      </div>
      :
      <div className="kezdoDoboz">
        <h1>Reflexjáték</h1>
        <p>Várj a zöld képernyőre!</p>
        {waitTime}
      </div>
      }
    </div>
  )
}

export default App