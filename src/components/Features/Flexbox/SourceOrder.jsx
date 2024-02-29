// File: src/components/Features/Flexbox/SourceOrder.jsx
// Date: 9/18/2020
// Note: Observer Design Pattern and Participants
// ................................................................................
import React from 'react'
import './SourceOrder.css'
// import './SourceOrder.sass'

//___ HTML Source Order vs CSS Display Order ___
const SourceOrder = () => (
  <main>
    <h1>CSS Flexbox</h1>
    <h2>No Ordering Applied</h2>
    <div>
      <button>
        <strong>1</strong>
        <br /> This appears first in source order.
      </button>
      <button>
        <strong>2</strong>
        <br /> This appears second in source order.
      </button>
      <button>
        <strong>3</strong>
        <br /> This appears third in source order.
      </button>
      <button>
        <strong>4</strong>
        <br /> This appears fourth in source order.
      </button>
    </div>

    <h2>Re-Ordered</h2>
    <div className='shuffled'>
      <button>
        <strong>1</strong>
        <br /> This appears first in source order.
      </button>
      <button>
        <strong>2</strong>
        <br /> This appears second in source order.
      </button>
      <button>
        <strong>3</strong>
        <br /> This appears third in source order.
      </button>
      <button>
        <strong>4</strong>
        <br /> This appears fourth in source order.
      </button>
    </div>
    <p style={{ background: 'gold', fontSize: '1.5rem' }}>
      This example used in the post{' '}
      <a href='http://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html'>
        HTML Source Order vs CSS Display Order
      </a>
      .
    </p>
  </main>
)

export default SourceOrder

// eof
