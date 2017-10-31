// const b = require('./b')

console.log('[a.js is loaded]');

// const str = b.bfun();
// b.bobj.def +='|pipe a';
export default function(){
  console.log('a.js is running');
  return 'a.js'
  // +b.bfun();
}
export const aobj = {
  def: 'adef'
}
