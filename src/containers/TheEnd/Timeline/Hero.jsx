// Hero.jsx
console.log("Mounting Hero.jsx ... <Hero />");

import React from "react";

const Hero = (props) => {
    return (
      <div>
 <section className="hero is-info is-small">
<div className="hero-body">
<div className="container">

  <h1 className="title">Blue and Small</h1>
  <h2 className="subtitle">.is-info .is-small</h2>

</div>
</div>
</section>

<section className="hero is-success is-large is-bold">
<div className="hero-body">
<div className="container">

  <h1 className="title">Green, Large, with Gradient</h1>
  <h2 className="subtitle">.is-success .is-large .is-bold</h2>

</div>
</div>
</section>

<section className="hero is-dark is-fullheight is-bold">
  <div className="hero-body">
  <div className="container">
    <h1 className="title">Black, Full height, Gradient, Navs</h1>
    <h2 className="subtitle">.is-dark .is-fullheight .is-bold</h2>
  </div>
  </div>


  <div className="hero-foot">
    <nav className="tabs">
      <div className="container">
        <ul>
          <li className="is-active"><a>Home</a></li>
          <li><a>Something Cool</a></li>
          <li><a>Other cool</a></li>
          <li><a>Batman's Lair</a></li>
          <li><a>Superman's Cape</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>

<section className="hero is-danger is-medium is-bold">
<div className="hero-body">
<div className="container">

  <h1 className="title">Red, Medium, with Gradient</h1>
  <h2 className="subtitle">.is-danger .is-medium .is-bold</h2>

</div>
</div>
</section>
      </div>  
    );
}

export default Hero;

// eof