const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

const artistsData = [
    {
        "id": 1,
        "name": "Foo Fighters",
        "genre": "Rock",
        "urlImg": "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15"
    },
    {
        "id": 2,
        "name": "Michael Jackson",
        "genre": "Pop",
        "urlImg": "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa"
    },
    {
        "id": 3,
        "name": "Emicida",
        "genre": "Hip Hop",
        "urlImg": "https://i.scdn.co/image/ab67616100005174908b4b4bc90e1518b68b4068"
    },
    {
        "id": 4,
        "name": "Chitãozinho e Xororó",
        "genre": "Sertanejo",
        "urlImg": "https://i.scdn.co/image/ab676161000051744606c59411c57f7b49588be4"
    },
    {
        "id": 5,
        "name": "Mc Coringa",
        "genre": "Funk",
        "urlImg": "https://i.scdn.co/image/ab67616d00001e02fe8f6dd361ad0f12b88c7f56"
    },
    {
        "id": 6,
        "name": "Arlindo Cruz",
        "genre": "Samba",
        "urlImg": "https://i.scdn.co/image/ab67616100005174181873f93056642d7b340839"
    },
    {
        "id": 7,
        "name": "Caetano Veloso",
        "genre": "MPB",
        "urlImg": "https://i.scdn.co/image/ab67616100005174e98de50f36cf1aa4bf047757"
    }
];

function searchArtists(searchTerm) {
    // Filtra os artistas pelo nome contendo o termo de busca
    return artistsData.filter(artist => 
        artist.name.toLowerCase().includes(searchTerm)
    );
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    if (result.length > 0) {
        artistName.innerText = result[0].name; // Exibe primeiro resultado
        artistImage.src = result[0].urlImg;
        resultArtist.classList.remove('hidden');
    } else {
        // Se não encontrar resultados, voltar para a playlist
        resultPlaylist.classList.remove("hidden");
        resultArtist.classList.add('hidden');
    }
}

// Define um evento para o campo de busca
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }
    
    const result = searchArtists(searchTerm);
    displayResults(result);
});