$(document).ready(function () {

    const inputTugas = $("#inputTugas");
    const btnTambah = $("#btnTambah");
    const daftarTugas = $("#daftarTugas");
    const inputTanggal = $("#inputTanggal");
    const inputStatus = $("#inputStatus");

    let dataEdit = null;

    btnTambah.click(function () {

        
        const tugas = inputTugas.val();
        const tanggal = inputTanggal.val();
        const status = inputStatus.val();
