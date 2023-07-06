const musicChoices = [
    {name: 'Marracash', songs: ['Popolare', 'Pagliaccio', 'Bastavano le briciole']},
    {name: 'Fabri Fibra', songs: ['Momenti no', 'Noia', 'Bugiardo']},
    {name: 'Egreen', songs: ['Nicolàs', '4 secondi', 'Il cuore e la fame']}
]

const generateRandomNum = (arr) => Math.floor(Math.random() * arr.length)

const randomArtist = musicChoices[generateRandomNum(musicChoices)];
const randomArtistName = randomArtist.name;
const randomSong = randomArtist.songs[generateRandomNum(randomArtist.songs)];

console.log(`Your artist is '${randomArtistName}' and the song the fate choose for you is '${randomSong}'.`)
