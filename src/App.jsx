import './App.css'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import Index from './components/Index'
import { withRouter } from 'react-router'

function App() {

  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Main} />
        </Switch>
    </div>
  )
}

export default withRouter(App)
