// import _ from 'lodash';
const b = require('./b');
// import {aobj} from './a';
import a from './a';
import './style.css';
import Bg from './a.jpg';


console.log('[index.js start]')
function component() {



  var element = document.createElement('div');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = 'hello' + a()+b.bfun() + a()+b.bfun();
  element.classList.add('hello');
  console.log('obj'+ b.bobj.def)
  var myBg = new Image();
  myBg.src = Bg;
  element.appendChild(myBg);
  return element;
}

// console.log('[c] '+c.str());

document.body.appendChild(component());