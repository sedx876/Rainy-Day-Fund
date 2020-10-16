import React from 'react'
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom'
import Landing from './Landing'
import WhatIsARainyDayFund from './WhatIsARainyDayFund'
import Assumptions from './Assumptions'
import Expenses from './Expenses'
import SavingsPlan from './SavingsPlan'

export default(
   <Router history={HashRouter}>
   
      {/* <Route path="/" component={App} /> */}
      <Route exact path="/" component={Landing} />
       <Route exact path="/what-is-a-rainy-day-fund" component={WhatIsARainyDayFund} />
       <Route exact path="assumptions" component={Assumptions} />
			<Route exact path="expenses" component={Expenses} />
			<Route exact path="savings-plan" component={SavingsPlan} />
   </Router>
)