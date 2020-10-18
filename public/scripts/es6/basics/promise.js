// File: es6/basics/promise.js
// Date: 10/15/2020
// Note: No promise; no guarantee - Fetch/Get/Update 
/* 
 * Promises aim to simplify asynchronous programming. JS code 
 * is full of async, stuff like AJAX requests and usually we 
 * use callback functions, but the code is hard to read to 
 * maintain. 
 * 
 * Promises are on the other hand better than callbacks, as 
 * they flatten the code, and make it easier to understand.
 * Let's consider a simple use case, where we need to fetch
 * a user, then their rights, then update a menu.
 * 
 */
console.log("\n9. Promises and Callbacks to ES6+ Generators");
// ES5+ stub with Callbacks
getUser(login, function (user) {
  getRights(user, function (rights) {
    updateMenu('rights');
  });
});

// ES6 stub with Promises
getUser(login)
  .then(function (user) {
    return getRights(user); // getRights is returning a promise
  })
  .then(function (rights) {
    updateMenu(rights)
  });
/* 
 * It executes as you read it: You want to fetch a user, then get their
 * rights, then update the menu.
 * 
 * As you can see, a promise is a 'thenable' object, which simple means
 * it has a then method. This method takes two arguments: on success
 * callback and one reject callback. The promise had three parameters:
 * 
 * 1. pending: while the promise is not done, for example our server call
 *    is not completed yet.
 * 
 * 2. fullfilled: when the promise is completed with success, for example,
 *    the server call returns an OK 200 HTTP status.
 * 
 * 3. rejected: whe the promise has failed, for the server return a 404
 *    HTTP status
 * 
 * When the promises is fullfiled, the success callback is called, with 
 * the result as an argument. If the promise is rejected, then the reject
 * callback is called, with a rejected value or an error as the argument.
 * 
 * So how do you create a promise? Pretty simple, there is a new class 
 * Promise, whose constructor expect a function with two paramenters
 * 'resolve' and 'reject'.
 */
const getUser = function (login) {
  return new Promise(function (resolve, reject) {
    // asyn stuff, like fetching users from the server, returning a response
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject('No user available');
    }
    return 'response';
  })
};
/*
 * Once you've created the promise, you can register callbacks, using 'then' 
 * method. This method can receive towo parameters, the two callacks you
 * want to call in the cas of successs or in the case of failure. Here we
 * only pass a 'success' callback, ignoring the potential error:
 */
getUser(login)
  .then(function (user) {
    console.log(user);
  })
/*
 * Once the promise is resolved, the success callback (here simply logging the user
 * on the console) will be called.
 * 
 * The cool part is that it flattens the code. For example, if your resolve callback
 * is also returning a promise, you can write:
 */
getUser(login)
  .then(function (user) {
    return getRights(user)  // getRights is returning a promise
      .then(function (rights) {
        return updateMenu(rights);
      })
  })

/* but more beautifully: */
getUser(login)
  .then(function (user) {
    return getRights(user)  // getRights is returning a promise
  })
  .then(function (rights) {
    return updateMenu(rights);
  })

// ERROR HANDLING
/*
 * Another interesting is the error handlie, as you can use a) one handler get promise
 * or b) one of all the chain.
 */
// 1) One per promise:
getUser(login)
  .then(function (user) {
    return getRights(user);
  }, function (error) {
    console.log(error); // will be called if getUser fails
    return Promise.reject(error);
  })
  .then(function (rights) {
    return updateMenu(rights);
  }, function (error) {
    console.log(error); // will be called if getRights fails
    return Promise.reject(error);
  })
// 2) One for the chain:
getUser(login)
  .then(function (user) {
    return getRights(user);
  })
  .then(function (rights) {
    return updateMenu(rights);
  })
  .catch(function (error) {
    console.log(error); // will be called if getUser or getRights fails
  })

// A new way to write API? Ref: standard Fetch API, 3rd party Axios and Redux-Sage API.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise


// eof
