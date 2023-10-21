let searchButton = document.querySelector('#searchButton')
let searchForm = document.querySelector('#searchBar')
let songContainer = document.querySelector('#searchResultsDisplaySection')
let audioPlayer = document.querySelector('.audioPlayer')
console.log(audioPlayer)




//creating a box for user input to go into



searchForm.addEventListener('submit', () => {
    let userInput = document.querySelector('#user-input')
    console.log(userInput.value)
    fetch(`https://proxy-itunes-api.glitch.me/search?term=${userInput.value}&entity=song`)
.then((response) => {
    console.log(response)
    return response.json()
}).then((data) => {
    console.log(data)
    //helpful understanding with how the console.log works:
    // console.log(data)
    // console.log(data.results)
    // console.log(data.results[0])
    // console.log(data.results[0].artistName)
    buildDisplay(data.results)
}
)
}) 

//this function shows the music track titles and artist name
function buildDisplay(musicArray) {
    songContainer.innerHTML = ""
    for (let song of musicArray) {
        let songBox = document.createElement('div')
        songBox.classList.add('musicResults')

        //photo of songs
        let songPhoto = document.createElement('img')
        songPhoto.src = song.artworkUrl100
        songPhoto.alt = 'Album art'
        songBox.appendChild(songPhoto)

        //song title
        let songName = document.createElement('div')
        songName.classList.add("songTitle")
        songName.innerText = `${song.trackName}`
        songBox.appendChild(songName)

        //artist name
        let artistName = document.createElement('div')
        artistName.classList.add('artist-name')
        artistName.innerText = `${song.artistName}`
        songBox.appendChild(artistName)
        
        //play button
        let playButton = document.createElement('button')
        playButton.classList.add('playButton')
        playButton.innerText = 'Preview Song'
        songBox.appendChild(playButton)

        //make song play
        playButton.addEventListener('click', () => {
            console.log(song, "song")
            console.log(audioPlayer)
           audioPlayer.src = song.previewUrl
        })

        //final step
        songContainer.appendChild(songBox)

    }
}





// madonna example 'https://itunes.apple.com/search?term=madonna&entity=song'