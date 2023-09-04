import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(10)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const buttleStyle = { backgroundColor: 'lightgreen' }

  return (
    <div className="App">
      <Counter count={count}></Counter>
      <Button OnClick={incrementCount} />
      <Button OnClick={incrementCount} />
      <Button OnClick={incrementCount} />
      <Button OnClick={incrementCount} />
      {count > 0 && (
        <div>
          <button
            style={buttleStyle}
            onClick={() => {
              setCount(0)
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  )
}

export default App
