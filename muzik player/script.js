const dropBox = document.querySelector(".drop-box");
const songNameMid = document.querySelector("h2");
const songNameQ = document.querySelector("#song-name");
const inputFile = document.querySelector("#input-file");
const player = document.querySelector("#song");
const playBtn = document.querySelector("#toggle-play");
const pauseBtn = document.querySelector("#pause");
const songList = document.querySelector(".song-collection");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const noOfSong = document.querySelector("#no-of-song");

const addedSong = [];
let CURR_SONG = 0;
let i = 0;

const handleDropBox = (e) => {
  e.preventDefault();
  // console.log(e.dataTransfer.files);
  let song = e.dataTransfer.files;
  let name = e.dataTransfer.files[0].name;
  addedSongToQueue(e.dataTransfer.files);
  // songNameMid.innerHTML = name;
};

const addedSongToQueue = (files) => {
  Array.from(files).forEach((file) => {
    addedSong.push(file);
    noOfSong.innerHTML = `${addedSong.length} Song`;
    const songItemList = document.createElement("div");
    songItemList.className = "single-song";
    // const multipleSong = document.querySelector('.single-song');
    songItemList.innerHTML = `
        <p class="song-name song-${++i}">${file.name.slice(0, 30)}</p>
        <!-- <p id="song-length">02:32</p> -->
      `;
    songList.append(songItemList);
  });
  if (player.paused) {
    player.src = URL.createObjectURL(addedSong[CURR_SONG]);
    player.load();
    player.play();
    playBtn.classList.add("show");
    songList.children[CURR_SONG].classList.add("selected");
    songNameMid.innerHTML = addedSong[CURR_SONG].name.slice(0, 30);
  }
};

const handleBtnClick = (e) => {
  if (player.src === "") {
    alert("please select a song");
    return;
  }
  playBtn.classList.toggle("show");

  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
};

const playPrev = () => {
  songList.children[CURR_SONG].classList.remove("selected");
  CURR_SONG = (CURR_SONG - 1 + addedSong.length) % addedSong.length;
  songList.children[CURR_SONG].classList.add("selected");
  player.src = URL.createObjectURL(addedSong[CURR_SONG]);
  songNameMid.innerHTML = addedSong[CURR_SONG].name.slice(0, 30);
  player.load();
  player.play();
};

const playNext = () => {
  songList.children[CURR_SONG].classList.remove("selected");
  CURR_SONG = (CURR_SONG + 1 + addedSong.length) % addedSong.length;
  songList.children[CURR_SONG].classList.add("selected");
  player.src = URL.createObjectURL(addedSong[CURR_SONG]);
  songNameMid.innerHTML = addedSong[CURR_SONG].name.slice(0, 30);
  player.load();
  player.play();
};

dropBox.addEventListener("drop", handleDropBox);
dropBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropBox.addEventListener("click", () => {
  inputFile.click();
});
inputFile.addEventListener("change", (e) => {
  addedSongToQueue(e.target.files);
});

playBtn.addEventListener("click", handleBtnClick);
prevBtn.addEventListener("click", playPrev);
nextBtn.addEventListener("click", playNext);
songList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('single-song')){
        const songId = document.querySelectorAll('.song-name');
        // console.log(songId);
        console.log(songId.classList);
    }
        
})