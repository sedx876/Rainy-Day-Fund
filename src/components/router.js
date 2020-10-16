import React from 'react'
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom'
import Landing from './Landing'
import WhatIsARainyDayFund from './WhatIsARainyDayFund'

export default(
   <Router history={HashRouter}>
   
      {/* <Route path="/" component={App} /> */}
      <Route exact path="/" component={Landing} />
       <Route exact path="/what-is-a-rainy-day-fund" component={WhatIsARainyDayFund} />
      
   </Router>
)