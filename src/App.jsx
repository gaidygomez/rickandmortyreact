import title from './assets/img/title.png'
import './App.css'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={title} className="" alt="title" width="600" height="150"/>
        <div>
          <h2>Bienvenido a Rick and Morty</h2>
        </div>

        <div>
          <BrowserRouter>
            <Link to="/home" className="continue">Continuar</Link>

            <Switch>
              <Route exact path="/home">
                <Main />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  )
}

export default App
