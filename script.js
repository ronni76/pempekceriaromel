// Efek muncul saat halaman dibuka
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Efek klik tombol WhatsApp
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Pengunjung menekan tombol pesan");
    });
});
