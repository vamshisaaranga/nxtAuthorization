/* eslint-disable arrow-body-style */
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
