// setup-tests.js

//?? I do not know why enzyme is suggested for testing...
//?? They have no official support for react>16, means if your app react version is above 16
//?? then you will have to use unofficial package
//?? see the article from library's author: https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl

import "react-native";
import "react-native-gesture-handler/jestSetup";

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */

import jsdom from "jsdom";

function setUpDomEnvironment() {
  const { JSDOM } = jsdom;
  const dom = new JSDOM("<!doctype html><html><body></body></html>", {
    url: "http://localhost/",
  });
  const { window } = dom;

  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: "node.js",
  };
  copyProps(window, global);
}

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === "undefined")
    .map((prop) => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

// setUpDomEnvironment();

// configure({ adapter: new Adapter() });

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
// Enzyme.configure({ adapter: new Adapter() });

jest.useFakeTimers();
