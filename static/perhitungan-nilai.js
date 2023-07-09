const form = document.getElementById('nilaiForm')

form.addEventListener('submit', ev => {
  const nama = document.getElementById("nama").value;
  const nilaiAngka = parseInt(document.getElementById("nilai").value);
  const nim = document.getElementById("nim").value;

  // ev.preventDefault();

  if (nim.length < 8 || nim.length > 8) {
    alert('NIM tidak valdi!')
    return
  }

  const data = new FormData()
  data.append('nama', nama)
  data.append('nim', nim)
  data.append('nilai', nilaiAngka)

  fetch('/validasi', {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: data
  })
    // .then(res => res.json())
    .then(res => res.text())
    .then(data => console.log(data))
    // .then(data => {

    //   document.getElementById("hasilNilai").textContent = "Nilai: " + data.nilaiHuruf;
    //   document.getElementById("hasilKeterangan").textContent = "Keterangan: " + data.keterangan;
    // })
    // .catch(err => {
    //   console.log('Request failed', err);
    // });
})
