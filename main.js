// Make sure JavaScript was linked properly
console.log('JavaScript')

// I just want to successfully click!!!!!!! Why won't this work?
// let button = document.querySelector('button')
// button.addEventListener('click', function)


// OMG IT'S WORKING!!!!!! but only on my number 7???????
let button = document.querySelector('.button')
button.addEventListener('click', function () {
  console.log('CLICKED')
})