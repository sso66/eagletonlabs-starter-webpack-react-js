// File: src/components/Main.jsx
// Date: 9/14/2019
// Note: Mobile First RWD-SPA
//..............................................................................
console.info('Mounting src/components/Main.jsx... <Main />')

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../../pages/Home'
// import About from "../../pages/About/MobileFirst"; // incorrect path
// import About from '../../pages/About/MobileFirst'
// import Product from '../../pages/Product/SvgResponsive' // incorrect path
// import Product from '../../pages/SVGR/SvgResponsive'
const Main = () => {
  return (
    <div className='main'>
      {/* Main */}
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/about' component={About} /> */}
        {/* <Route path='/product' component={Product} /> */}
      </Switch>
    </div>
  )
}

export default Main

// eof
