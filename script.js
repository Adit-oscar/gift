// -- Start Baris Menangani Music --

let control = document.querySelector(".control");
let controlLabel = document.querySelector(".fa-solid");
let audio = document.getElementById("audio");

let isPlay = true;

audio.play();

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

const lagu = ["Happy Birthday Sayangku 😘", "Selamat menua 😊"];

let wordIndex = 0;
let wordChar = 0;
let isNext = false;

function lirikLagu() {
  const currentWord = lagu[wordIndex];
  const currentChar = currentWord.substring(0, wordChar);

  lirik.textContent = currentChar;

  if (wordIndex < lagu.length) {
    if (!isNext && wordChar < currentWord.length) {
      wordChar++;
      setTimeout(lirikLagu, 200);
    } else if (isNext && wordChar > 0) {
      setTimeout(() => {
        wordChar--;
      }, 1500);
      setTimeout(lirikLagu, 200);
    } else {
      isNext = !isNext;
      wordIndex = !isNext ? wordIndex + 1 : wordIndex;
      setTimeout(lirikLagu, 300);
    }
  }

  if (wordIndex == lagu.length) {
    wordIndex = 0;
  }
}

lirikLagu();

// -- End Baris mengangani auto typing text --
