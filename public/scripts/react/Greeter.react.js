// Greeter.react.js
console.log('mount Greeter.react.js');

import React, {Component} from 'react';
import styles from './Greet.css';
import content from './Greet.json';

class Greeter extends Component {
 render() {
   return (
   <div className={styles.root}>
        <h1>Single Page Application - Responsive Web Design</h1>
        <p>{content.greetText}</p>
        <span>Webpack, NPM, React + Redux</span>
        <hr />
        <h2>Idempotence</h2>
        <p>Idempotence is a funky word that often hooks people.<br />
            Idempotence is sometimes a confusing concept, at least from the academic definition.
            <br/>
            From a RESTful service standpoint, for an operation (or service call) to be idempotent, clients can make that same call repeatedly while producing the same result. 
            <br />
            In other words, making multiple identical requests has the same effect as making a single request. 
            <br />
            Note that while idempotent operations produce the same result on the server (no side effects), the response itself may not be the same (e.g. a resource's state may change between requests). 
            <br />
            The PUT and DELETE methods are defined to be idempotent. 
            <br />
            However, there is a caveat on DELETE. The problem with DELETE, which if successful would normally return a 200 (OK) or 204 (No Content), will often return a 404 (Not Found) on subsequent calls, unless the service is configured to "mark" resources for deletion without actually deleting them. 
            <br />
            However, when the service actually deletes the resource, the next call will not find the resource to delete it and return a 404. 
            <br />
            However, the state on the server is the same after each DELETE call, but the response is different.
            <br />
            GET, HEAD, OPTIONS and TRACE methods are defined as safe, meaning they are only intended for retrieving data. 
            <br />
            This makes them idempotent as well since multiple, identical requests will behave the same.
      </p>
     </div>
   )
 } 
}

export default Greeter;
// eof