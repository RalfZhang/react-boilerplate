import _ from 'lodash';
import { cube } from './math.js';
// import printMe from './print.js';
// import './style.css';

// if (process.env.NODE_ENV !== 'production') {
//   console.log('---Looks like we are in development mode!');
// }

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var br = document.createElement('br');

  
  btn.innerHTML = 'Click me and check the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML ='abc';

  element.appendChild(br);
  element.appendChild(btn);
  
  btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;
    print();
  })
  
  return element;
}
var preElem = document.createElement('pre');
preElem.innerHTML= [
  'Hello webpack',
  '5 cubed is equal to '+cube(5)
].join('\n\n');
document.body.appendChild(preElem);


document.body.appendChild(component());


// console.log('module', module);
// if(module.hot) {
//   module.hot.accept('./print.js', function(){
//     console.log('Accepting the updated printMe module!')
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   })
// }