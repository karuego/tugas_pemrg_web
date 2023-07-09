const kotak = document.getElementById('kotak')
const detik = document.getElementById('detik');
let s = 1

const durasi = setInterval(() => {
  console.log(s)
  if (s == 5) s = 0;
  detik.innerText = s++;
}, 1000)

setTimeout(() => {
    // kotak.style.left = 'calc(100% - 100px)'
    kotak.style.left = '80%'
  }, 5000);

  setTimeout(() => {
    kotak.style.top = '80%'
  }, 10000);

  setTimeout(() => {
    kotak.style.display = 'none'
    clearInterval(durasi)
  }, 15000);
