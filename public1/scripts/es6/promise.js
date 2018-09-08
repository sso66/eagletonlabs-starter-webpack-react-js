// promise.js
// 9. Promises
// ES5 with Callbacks
// getUser(login, function (user) {
//   getRights(user, function (rights) {
//     updateMenu('rights');
//   });
// });

// ES6 with Promises
// getUser(login)
//   .then(function (user) {
//     return getRights(user); // getRights is returning a promise
//   })
//   .then(function (rights) {
//     updateMenu(rights)
//   });

const login = function() {};

const getUser = function (login) {
  return new Promise(function (resolve, reject) {
    // asyn stuff, like fetching users from the server, returning a response
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject('No user available');
    }
  })
};
getUser(login)
  .then(function (user) {
    console.log(user);
  })

// eof
