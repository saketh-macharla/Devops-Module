import './styles.css'
import LOGO from './logo192.png'
import SVG from './googlelogo.svg'

const App = () => {
  const n = 'Saketh'
  return (
    <>
      <h1>
        React Typescript Webpack Starter Template -{process.env.NODE_ENV}{' '}
        {process.env.name} {n}
      </h1>
      <img src={LOGO} alt="Logo" />
      <img src={SVG} alt="svg" />
    </>
  )
}

export default App
