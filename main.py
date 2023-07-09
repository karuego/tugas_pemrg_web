import json
from werkzeug.datastructures import MultiDict
from flask import Flask, render_template, redirect, url_for, request, jsonify

app = Flask(__name__)

app.static_folder = 'static'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tugas1')
def tugas1():
    return render_template('tugas1/index.html')

@app.route('/tugas2/')
@app.route('/tugas2/<int:nomor>')
def tugas2_(nomor=0):
    page = ''
    if nomor == 1:
        page = render_template('tugas2/buku.html')
    elif nomor == 2:
        page = render_template('tugas2/tanda-pengenal.html')
    else:
        page = render_template('tugas2/index.html')
    return page


@app.route('/tugas3/')
@app.route('/tugas3/<int:nomor>')
def tugas3(nomor=None):
    page = ''
    if nomor == 1:
        page = render_template('tugas3/nomor1-kotak.htm')
    elif nomor == 2:
        page = render_template('tugas3/nomor2-perhitungan-nilai.htm')
    elif nomor == 3:
        page = render_template('tugas3/nomor3-kalkulator.htm')
    else:
        page = render_template('tugas3/index.html')
    return page

@app.route('/validasi', methods=['POST', 'GET'])
def validasi():
    data = MultiDict(request.values.to_dict())
    nilai = data.get('nilai', default=0, type=int)
    huruf = ''
    keterangan = ''

    if nilai >= 90:
        huruf = "A"
        keterangan = "LULUS"
    elif nilai >= 80:
        huruf = "B"
        keterangan = "LULUS"
    elif nilai >= 70:
        huruf = "C"
        keterangan = "LULUS"
    elif nilai >= 60:
        huruf = "D"
        keterangan = "TIDAK LULUS"
    else:
        huruf = "E"
        keterangan = "TIDAK LULUS"

    data.add('huruf', huruf)
    data.add('keterangan', keterangan)

    return render_template('tugas3/hasil-nilai.htm', res=data.to_dict())


app.run(host='0.0.0.0', port=8080, debug=True)
