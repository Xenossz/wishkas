// Mendapatkan elemen gambar dan modal
var gambar = document.getElementById("gambar");
var modal = document.getElementById("popupModal");
var closeBtn = document.getElementsByClassName("close")[0];

// Ketika gambar diklik, tampilkan modal
gambar.onclick = function () {
  modal.style.display = "block";
};

// Ketika pengguna mengklik tombol close, sembunyikan modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Jika pengguna mengklik di luar modal, sembunyikan modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
