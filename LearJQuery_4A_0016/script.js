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

        if (tugas === "" || tanggal === "") {
            alert("Data harus dimasukkan!");
            return;
        }

        if (dataEdit) {

            dataEdit.find(".nama").html(tugas);
            dataEdit.find(".tanggal").html("Tanggal: " + tanggal);

            const elStatus = dataEdit.find(".status");

            elStatus.html("Status: " + status);

            if (status === "Done") {
                elStatus.removeClass("progress").addClass("done");
            } else {
                elStatus.removeClass("done").addClass("progress");
            }

            dataEdit = null;
            btnTambah.html("Tambah Data");

    } else {
        const listbaru = $(`
                <li>
                    <div class="info">
                        <h3 class="nama">${tugas}</h3>
                        <p class="tanggal">Tanggal: ${tanggal}</p>
                        <p class="status ${status === "Done" ? "done" : "progress"}">
                            Status: ${status}
                        </p>
                    </div>

                    <div class="aksi">
                        <button class="edit">Edit</button>
                        <button class="hapus">Hapus</button>
                    </div>
                </li>
            `);