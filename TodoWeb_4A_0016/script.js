const inputTugas = document.getElementById("inputTugas");
const btntambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");
const inputTanggal = document.getElementById("inputTanggal");
const inputStatus = document.getElementById("inputStatus");

let dataEdit = null;

btntambah.addEventListener("click", function() {

    const tugas = inputTugas.value;
    const tanggal = inputTanggal.value;
    const status = inputStatus.value;

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
        const listbaru = document.createElement("li");
        
        listbaru.innerHTML = `
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
        `;

        daftarTugas.appendChild(listbaru);

        // Tombol Hapus
        const btnHapus = listbaru.querySelector(".hapus");
        btnHapus.addEventListener("click", function() {
            listbaru.remove();
        });

        //Tomcol edit
        const btnEdit = listbaru.querySelector(".edit");
        btnEdit.addEventListener("click", function() {
            inputTugas.value = listbaru.querySelector(".nama").innerHTML;
            inputTanggal.value = listbaru.querySelector(".tanggal").innerHTML.replace("Tanggal: ", "");
            inputStatus.value = listbaru.querySelector(".status").innerHTML.replace("Status: ", "");
