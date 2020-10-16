import React from 'react'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import App from './App'

export default(
   <Router history={HashRouter}>
      <Route path="/" component={App} />
   </Router>
)