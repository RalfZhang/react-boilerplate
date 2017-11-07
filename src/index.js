// import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print.js';
// import './style.css';

// if (process.env.NODE_ENV !== 'production') {
//   console.log('---Looks like we are in development mode!');
// }

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML ='abc'

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
var preElem = document.createElement('pre');
preElem.innerHTML= [
  'Hello webpack',
  '5 cubed is equal to '+cube(5)
].join('\n\n');
document.body.appendChild(preElem);


let element = component();
document.body.appendChild(element);


console.log('module', module);
if(module.hot) {
  module.hot.accept('./print.js', function(){
    console.log('Accepting the updated printMe module!')
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}