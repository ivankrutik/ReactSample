const App = (props) => {
  const { initialButtonText } = props
  const { initialButtonClass } = props
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [buttonClass, setButtonClass] = React.useState(initialButtonClass)

  const onButtonClick = () => {
    setButtonText('Hello from React')
    setButtonClass('green-btn')
  }

  return (
    <div className="app">
      <button className={buttonClass} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(
  <App initialButtonText="Click me now" initialButtonClass="red-btn" />
)
