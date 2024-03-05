import { useState } from 'react'
import './App.css'

function App() {

  const [selected, setSelected] =useState(null);

  const toggle=(i)=>{
    if(selected ===i){
      return setSelected(null);
    }

    setSelected(i);
  }

  const data=[
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ]
  

  return (
    <div className='wrapper'>
      <div className='accordian'>
        <h2>FAQ Component</h2>
        {data.map((item, i)=>
          <div className='item'>
            <div className='title' onClick={()=>toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i? 'content show' : 'content'}>{item.answer}</div>
          </div>
        )}

      </div>
    </div>
  )
}


export default App
