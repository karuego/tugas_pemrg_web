const operasi = document.getElementById('operasi')
const output = document.getElementById('output')
const angka = document.getElementById('angka')

output.focus()
document.body.onclick = () => output.focus()

output.onkeyup = e => {
  if (e.keyCode == 13)
    output.value = eval(output.value)
}

angka.addEventListener('click', ev => {
  if (ev.target.id == 'angka') {
    return
  }

  output.value += ev.target.textContent
})

operasi.addEventListener('click', ev => {
  if (ev.target.id == 'operasi') {
    return
  }

  switch (ev.target.id) {
    case 'o-c':
      output.value = ''
      break
    case 'o-s':
      output.value = eval(output.value)
      break;
    case 'o-t':
      output.value += '+'
      break
    case 'o-m':
      output.value += '-'
      break
    case 'o-k':
      output.value += '*'
      break
    case 'o-b':
      output.value += '/'
      break
    default:
      // statements_def
      break;
  }
})
