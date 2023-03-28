const btn = document.getElementById('btn');
const insideBtn = document.querySelector('.inside-btn')

btn.addEventListener('mousemove', (e) => {
  var x = e.clientX * 0.25;
  var y = e.clientY * 0.25;
  // console.log(x,y)
  btn.style.backgroundPosition= `${y}% ${x}%`;
  btn.classList.add('active-shadow');
  insideBtn.style.backgroundPosition= `${x}% ${y}%`;
})

btn.addEventListener('mouseleave', () => {
  btn.classList.remove('active-shadow');
})

btn.addEventListener('click', () => {
  console.log('Deeper')
})

