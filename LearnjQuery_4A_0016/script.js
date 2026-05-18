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

        if(tugas === "" || tanggal === "") {
        alert("Data harus dimasukkan!");
        return;
    }

    if(dataEdit) {
        dataEdit.querySelector(".nama").innerHTML = tugas;
        dataEdit.querySelector(".tanggal").innerHTML = "Tanggal: " + tanggal;
        
        const elStatus = dataEdit.querySelector(".status");
        elStatus.innerHTML ="Status: " + status;
        elStatus.className = status === "Done" ? "status done" : "status progress";

        dataEdit = null;
        btntambah.innerHTML = "Tambah Data";

         } else {
            const listbaru = $("<li></li>");




});
