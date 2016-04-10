# LongArithmetic [![Build Status](https://travis-ci.org/DanCorder/LongArithmetic.png)](https://travis-ci.org/DanCorder/LongArithmetic)

JavaScript based website to generate long arithmetic exercises for printing. Code is entirely client side so you can host this site anywhere that you can put up a static web page.

##Build
- Run "npm install"
- Run "npm run build"

The finished site is built to /dist

To build only parts of the code, or to just build and run the tests see the npm commands defined in package.json.

##Development
Typescript type definitions are installed using Typings. You will need to install Typings globally to add new type definitions (you may need to use sudo):

  npm install typings -g

##Using VS Code
This project can built and debugged using VS Code. The build and test tasks have been configured to run the npm commands defined in package.json.