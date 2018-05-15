import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './utils/bootstrap.css'
import './utils/bootstrap-grid.css'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import middlewares from './middlewares'

const store = createStore(reducers, middlewares)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))
