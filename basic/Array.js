//includes

console.log(['a','b'].includes('c'));



//some

console.log([1,5,66].some((item)=>{
  return item > 50
}));


//every
console.log([1,5,66].every((item)=>{
  return item > 50
}));

//filter
console.log([1,5,66].filter((item)=>{
  return item > 50
}));

//map
console.log([1,5,66].map((item)=>{
  return item += 50
}));


//reduce
console.log([1,5,66].reduce((prev, current)=>{
  return prev + current
}));