let searchButton = document.querySelector('#searchButton')
let songContainer = document.querySelector('#search-results')

searchButton.addEventListener('click', () => {
    fetch('https://itunes.apple.com/search?term=madonna&entity=song')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    console.log(data.results)
    console.log(data.results[0])
    console.log(data.results[0].artistName)
    buildDisplay(data.results)
}
)
}) 

function buildDisplay(musicArray) {
    for (let song of musicArray) {
        let songBox = document.createElement('div')
        songBox.classList.add('music')
        let songName = document.createElement('h3')
        songName.innerText = song.trackName
        songBox.appendChild(songName)
        songContainer.appendChild(songBox)

    }
}

