import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const texts = ['butt1', 'butt2', 'butt3', 'butt4', 'click me', 'press me']

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter count={count}></Counter>
      {texts.map((text, index) => {
        let key = 'keyButt' + index
        return (
          <Button OnClick={incrementCount} Caption={text} key={key}></Button>
        )
      })}
    </div>
  )
}

export default App
