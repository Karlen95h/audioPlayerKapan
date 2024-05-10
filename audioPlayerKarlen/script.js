var data = {
    title: [
        'polo-pan-canopee',
        "Nemra - Nare",
        "Billie Eilish - everything i wanted",
        "Claud Debussy - Reverie",
        "Tigran Hamasyan - Leaving Paris",
        "Freddie Mercury - Mamma"
    ],
    song: [
        'music/polo-pan-canopee.mp3',
        "music/Nemra - Nare.mp3",
        "music/Billie Eilish - everything i wanted.mp3",
        "music/Debussy Reverie.mp3",
        "music/Tigran Hamasyan Leaving Paris.mp3",
        "music/Freddie Mercury - Mamma (Bohemian Rhapsody).mp3"
    ],
    poster: [
        "https://i.gifer.com/7d20.gif",
        "https://media2.giphy.com/media/5xtDarmSceWsGyD4VeE/source.gif",
        "https://cdn.dribbble.com/users/1242979/screenshots/7099165/music.gif",
        "https://i.gifer.com/8RWM.gif",
        "https://media2.giphy.com/media/Y0GyZQpjqafoatTvjB/giphy.gif",
        "https://cdn.dribbble.com/users/1921422/screenshots/5511883/freddie.gif"
    ]
}


let song  =  new Audio()

window.onload  = function (){
    playSong()
}


let currentSong = 0
function playSong (){
    song.src = data.song[currentSong]
    let  songTitle =  document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroudImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.backgroudImage  = "url(" + data.poster[currentSong] + ")";
    song.play()
}


function playOrPauseSong(){
    let play = document.getElementById("play")

       if(song.paused){
                song.play()
                play.src =  "images/pause.png" 
       }else{
               song.pause()
               play.src =  "images/play-button-arrowhead.png"   
       }
}


