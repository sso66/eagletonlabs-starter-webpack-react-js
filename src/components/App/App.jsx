// File: src/components/App/App.jsx
// Date: 9/14/2019 - 2/26/2024
// Note: Mobile First RWD-SPA
//..............................................................................
console.info('Mounting src/components/App/App.jsx... <App />')

import React from 'react'
import './App.sass'
// import Header from "../../components/Site/Header/Header";
// import Navigation from "../../components/Site/Nav/Navigation";
// import Main from "../../components/Site/Main";
// import Aside from '../../components/Site/Aside/Aside'
import Footer from '../../components/Site/Footer/Footer'
import SourceOrder from '../Features/Flexbox/SourceOrder'
import FlexboxModule from '../Features/Flexbox/FlexboxModule'

const App = () => {
  // function App() {
  // class App extends Component {
  // render() {
  return (
    <div className='App'>
      <h1 style={{ color: 'snow' }}>
        Live Coding Environments & Real-World Examples
      </h1>
      {/* <Header /> */}
      <FlexboxModule />
      <SourceOrder />
      {/* <Navigation /> */}
      {/* <Main /> */}
      {/* <Aside /> */}
      <Footer />
    </div>
  )
  // }
  // }
}

export default App

// eof
