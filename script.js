// -- Start Baris Menangani Music --

let control = document.querySelector(".control");
let controlLabel = document.querySelector(".fa-solid");
let audio = document.getElementById("audio");

let isPlay = true;

control.addEventListener("click", function () {
  audio.pause();

  controlLabel.classList.remove("fa-pause");
  controlLabel.classList.add("fa-play");

  if (!isPlay) {
    audio.play();
    controlLabel.classList.remove("fa-play");
    controlLabel.classList.add("fa-pause");
  }

  isPlay = !isPlay;
});

// -- End Baris Menangani Music --

// -- Start Baris mengangani auto typing text --

const lirik = document.getElementById("lirik");

const lagu = [
  "Happy Birthday Sayangku 😘",
  "Selamat menua 😊",
  "Semoga bahagia selalu 💖",
  "Tetap sehat dan sukses!",
];

let wordIndex = 0; // indeks elemen array lagu
let charIndex = 0; // indeks karakter dalam elemen lagu
let isTyping = true; // status mengetik atau menunggu lanjut

function lirikLagu() {
  if (wordIndex >= lagu.length) {
    // Semua baris sudah selesai, hentikan animasi
    return;
  }

  // Ambil teks paragraf saat ini
  const currentLine = lagu[wordIndex];

  if (isTyping) {
    // Jika sedang mengetik, tambahkan satu karakter ke paragraf saat ini
    charIndex++;

    // Ambil substring sampai karakter ke charIndex
    const typedText = currentLine.substring(0, charIndex);

    // Perbarui atau buat paragraf baru pada container `lirik`
    // Jika paragraf untuk indeks ini belum ada, buat; jika sudah ada update isinya
    let currentP = lirik.querySelectorAll("p")[wordIndex];
    if (!currentP) {
      currentP = document.createElement("p");
      // Style atau class bisa ditambahkan di sini jika diinginkan
      lirik.appendChild(currentP);
    }
    currentP.textContent = typedText;

    if (charIndex < currentLine.length) {
      // lanjut mengetik karakter berikutnya
      setTimeout(lirikLagu, 200);
    } else {
      // selesai mengetik satu paragraf, tunggu 2 detik lalu lanjut baris berikutnya
      isTyping = false;
      setTimeout(lirikLagu, 2000);
    }
  } else {
    // Berhenti mengetik dan pindah ke baris selanjutnya
    wordIndex++;
    charIndex = 0;
    isTyping = true;
    setTimeout(lirikLagu, 500);
  }
}

function heart() {
  // Ambil semua elemen hati
  const hearts = document.querySelectorAll(".heart");
  hearts.forEach((heart) => {
    // Posisi horizontal acak (0% - 100% untuk penuh halaman)
    const randomLeft = Math.random() * 100 + "%";
    // Posisi vertikal acak (0% - 100% untuk penuh halaman)
    const randomTop = Math.random() * 100 + "%";
    // Durasi acak (2-5 detik)
    const randomDuration = Math.random() * 3 + 2 + "s";
    // Delay acak (0-3 detik)
    const randomDelay = Math.random() * 3 + "s";

    heart.style.left = randomLeft;
    heart.style.top = randomTop;
    heart.style.animationDuration = randomDuration;
    heart.style.animationDelay = randomDelay;
    heart.style.opacity = "1"; // Aktifkan animasi
  });
}

// -- End Baris mengangani auto typing text --

// -- Start Handle Buka Cover --

const btnBuka = document.getElementById("buka");

btnBuka.addEventListener("click", function () {
  const coverKiri = document.querySelector(".cover-kiri");
  const coverKanan = document.querySelector(".cover-kanan");

  setTimeout(() => {
    coverKiri.style.transform = "translateX(-100%)";
    coverKanan.style.transform = "translateX(120%)";
  }, 1000);

  setTimeout(() => {
    audio.play();
  }, 1200);

  setTimeout(() => {
    lirikLagu();
    heart();
  }, 1600);
});

// -- End Handle Buka Cover --
