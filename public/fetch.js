function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
window.fetchOriginal = window.fetch;
//"use strict";
var Fetch = function Fetch(url, obj) {
  if (url && typeof url == 'string' && !Fetch.__routes__[url]) {
    return window.fetchOriginal(url, obj);
  }
  // Return a new promise.
  return new Promise(function (resolve, reject) {
    // Check is the url argument present.
    if (!url) throw new Error("TypeError: Failed to execute 'fetch' on 'Window': " + "1 argument required, but 0 present."); // Check is the url argument a string.

    if (typeof url !== 'string') throw new Error("TypeError: Failed to execute 'fetch' on 'Window': " + "The First argument is expected to be a string representing the route."); // If route for passed url is not defined, throw an error.

    if (!Fetch.__routes__[url]) {
      throw new Error("TypeError: Failed to execute 'fetch' on 'Window': Failed to parse URL from " + url);
    } else {
      // Store route in a variable
      var route = Fetch.__routes__[url]; // If request object (obj) has 'method' specified, transform it to uppercase
      // to avoid errors (post, POST, PoSt) and pass it to method variable.
      // Otherwise set GET as default HTTP method.

      /*********************************************************/

      try {
        var action = obj.body.action;
        if (!action) {
          action = JSON.parse(obj.body).action
        }

        if (action != "RESET") {
          throw new Error();
        }
      } catch(e) {
        route = Fetch.__routes__['http://bomb.upm.es/temperature_'];
      }

      /*********************************************************/


      var method = 'GET';
      if (obj && obj.method) method = obj.method.toUpperCase(); // 1. Resolve the promise with the response object of selected method.
      // 2. Pass wait property of selected method as timeout
      method = (["GET","POST","PUT","DELETE"].indexOf(method) !== -1) ? method : "GET";
      setTimeout(function () {
        resolve(route[method].response);
      }, route[method].wait);
    }
  });
}; // Set the default timeout to 2000 ms.


Fetch.__timeout__ = 5000; // Method for changing the default timeout.

Fetch.setTimeout = function (timeout) {
  Fetch.__timeout__ = timeout;
}; // Method for returning current timeout.


Fetch.getTimeout = function () {
  return Fetch.__timeout__;
}; // Set the routes object to an empty object.


Fetch.__routes__ = {}; // Method for changing routes object to pre-defined object.

Fetch.setRoutes = function (routes) {
  // Throw an error if routes argument is not an object.
  if (!routes || _typeof(routes) !== 'object') {
    throw new Error('Fetch.setRoutes method requires the first argument to be an object.');
  }

  Fetch.__routes__ = routes;
}; // Return a copy of the routes object.
// Object.assign is used because NodeJS natively doens't support 
// object spread syntax {...Fetch.__routes__}.


Fetch.getRoutes = function () {
  return Object.assign({}, Fetch.__routes__);
}; // Function for adding Fetch.__mehtods__ prototype to passed object
// by assigning obj to empty object which has Fetch.__Methods__ on it's prototype.


var addFetchMethods = function addFetchMethods(obj) {
  return Object.assign(Object.create(Fetch.__Methods__), obj);
}; // Method for adding new routes


Fetch.addRoute = function (route, obj) {
  // Throw an error if the route already exists.
  if (Fetch.__routes__[route]) throw new Error('Route ' + route + ' already exists, if you want to remove it use Fetch.removeRoute method.'); // Throw an error if route is not a string and obj is not an object.

  if (!route || typeof route !== 'string' || !obj || _typeof(obj) !== 'object') {
    throw new Error('Fetch.addRoute method requires the first argument to be a string ' + 'representing the route, and second argument to be a response object for that route.');
  } // Create empty object which represents the new route.


  var newRoute = {}; // For each method (GET, POST, PUT, etc..) on the obj do,
  // if that method is not empty object...

  for (var method in obj) {
    if (Object.keys(obj).length !== 0) {
      // Throw an error if expect propety is not an object.
      if (obj[method].expect && _typeof(obj[method].expect) !== 'object') throw new Error("The expect property needs to be an object."); // Throw an error if wait propety is not a number.

      if (obj[method].wait && typeof obj[method].wait !== 'number') throw new Error("The wait property needs to be a number representing " + "the delay of the response."); // Check does the wait property exceed the default timeout.

      if (obj[method].wait > Fetch.__timeout__) throw new Error("The wait  property exceedes the default timeout limit. " + "To change the default timeout limit use Fetch.setTimeout method."); // 1. If expect on obj is not defined, set it to an empty object.
      // 2. If wait on obj is not defined, set it to 0 by default.
      // 3. If response on obj is not defined, set it to null.
      // 4. Set url to route argument passed to the Fetch.addRoute method 

      var expect = obj[method].expect || {};
      var wait = obj[method].wait || 0;
      var response = obj[method].response || null;
      var url = route; // Create responseObj.

      var responseObject = {
        // Use addFetchMethods function to merge response property
        // with another object which has Fetch__Methods__ on its prototype.
        // This way our response property (object) will have methods 
        // like .json() on it's prototype.
        // Use Object.assign method to spread expect object and add response and url properties on it.
        // Object.assign is used because NodeJS natively doens't support 
        // object spread syntax { response, ...expect, url }.
        response: addFetchMethods(Object.assign({}, expect, {
          response: response,
          url: url
        })),
        wait: wait
      }; // Transform method name to uppercase (get = GET) and
      // create that method on newRoute object.

      newRoute[method.toUpperCase()] = responseObject;
    } // Add new route to Fetch.__routes__ object


    Fetch.__routes__[route] = newRoute;
  }
}; // Method for removing routes.


Fetch.removeRoute = function (route) {
  // Throw an error if route argument is not a string.
  if (!route || typeof route !== 'string') {
    throw new Error('Fetch.removeRoute method requires first argument to be a ' + 'string representing the route.');
  } // Throw an error if route doesn't exists.


  if (!Fetch.__routes__[route]) throw new Error("Route " + route + " doesn't exist."); // If none of the tests fail, deleta a route.

  delete Fetch.__routes__[route];
}; // Use Fetch API by replacing the fetch API with it


Fetch.use = function (routes) {
  // Set the globalObj to window object in the browser environment, or
  // to global object in the Node environment.
  var globalObject = window || global; // If routes argument is provided and its value is anobject, use it.
  // If routes argument is provided and its value is not an object, throw an error.
  if (routes && _typeof(routes) !== 'object') {
    throw new Error('Fetch.use method requires the first argument to be an object.');
  } else if (routes) {
    Fetch.setRoutes(routes);
  }

   // Replace fetch API on the globalObject with Fetch.

  globalObject.fetch = Fetch;
}; // Object containing methods on the Fetch response object prototype.


Fetch.__Methods__ = {
  // Initial json method which just returns the response within the resolved promise.
  json: function json() {
    var self = this;
    return new Promise(function (resolve, redject) {
      if (typeof self.response === "function") {
        resolve(self.response(self));
      } else {
        resolve(self.response);
      }
    });
  }
}; // Method for adding methods on the Fetch response object prototype.

Fetch.addMethod = function (name, func) {
  // Throw an error if name is not a string and func is not a function.
  if (!name || typeof name !== 'string' || !func || console.log({}.toString.call(func) !== '[object Function]')) {
    throw new Error('Fetch.expect method requires the first argument to be a string representing ' + 'the name of the method, and second argument to be anonimous funciton.');
  }

  Fetch.__Methods__[name] = func;
};
window._Fetch = Fetch;
try {
  module.exports = Fetch;
} catch (e) {}

