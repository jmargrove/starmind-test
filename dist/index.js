// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function(modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  let previousRequire = typeof parcelRequire === "function" && parcelRequire;
  let nodeRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        let currentRequire =
          typeof parcelRequire === "function" && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === "string") {
          return nodeRequire(name);
        }

        let err = new Error("Cannot find module '" + name + "'");
        err.code = "MODULE_NOT_FOUND";
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      let module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {}
    ];
  };

  let error;
  for (let i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    let mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})(
  {
    "index.ts": [
      function(require, module, exports) {
        "use strict";

        let main = function() {
          console.log("watching with nodemon 🚀");
          let input = ["s", "t", "a", "r", "m", "i", "n", "d"];
          let result = [];

          let customReverse = function(accumulator, letter) {
            // Task 1: Implement this function such that it reverses the array when passing it to Array.prototype.reduce.
            accumulator.unshift(letter);
            return accumulator;
          };

          let assignResult = function(array) {
            // Task 2: Above defined "const result" should hold the value of array.
            result.push.apply(result, array);
          };

          assignResult(input.reduce(customReverse, []));
          let testPassed = input.reverse().join("") === result.join("");
          testPassed
            ? console.log("Test is passed!!! 😄😄😄")
            : console.log("Test Failed 😞😞😞"); // Bonus question: Why can't we check (result === input.reverse()) to find out whether the test has passed?
          // Arrays like input.reverse() and result are stored at references in the memory. This means that even though the
          // contents maybe the same, the references are different, and they are different objects. When we array1 === and array2
          // we test if they have the same reference essentially. The join method joins all elements of the array into a string.
          // strings can be directly compared with each othere. Essentially, if comparing objects we need to test if they are deeply equal to
          // each other, and therefore check the contents. Primitive types like strings and numbers have a reference in the memory and
          // therefor they can be compared.
        };

        main();
      },
      {}
    ]
  },
  {},
  ["index.ts"],
  null
);
//# sourceMappingURL=/index.js.map
