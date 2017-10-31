// import _ from 'lodash';
// import {aobj} from './a';
const b = require('./b');
import a from './a';

console.log('[index.js start]')
function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = 'hello' + a()+b.bfun() + a()+b.bfun();
  console.log('obj'+ b.bobj.def)
  return element;
}

document.body.appendChild(component());