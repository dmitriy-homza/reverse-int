module.exports = function reverse (n) {
  var array = String(n).split('');
  if (array[0]=='-'){
     array.splice(0, 1);
  }
  let z = '';
  for (let i=array.length-1; i>=0; i--) {
      z=z+array[i];
  }
  let num = Number(z);
    return(num);
}
