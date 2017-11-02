// import _ from 'lodash';
// const b = require('./b');
// import a from './a';
// import './style.css';
// import Bg from './a.jpg';

import printMe from './print';

console.log('[index.js start]')
function component() {



  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.innerHTML = 'divvvvv'
  // element.innerHTML = 'hello' + a()+b.bfun() + a()+b.bfun();
  // element.classList.add('hello');
  // console.log('obj'+ b.bobj.def)
  // var myBg = new Image();
  // myBg.src = Bg;

  // element.appendChild(myBg);

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

// console.log('[c] '+c.str());

document.body.appendChild(component());