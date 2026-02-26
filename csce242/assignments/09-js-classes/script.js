const songsContainer = document.getElementById("songs");
const modal = document.getElementById("song-modal");
const closeModalButton = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalArtist = document.getElementById("modal-artist");
const modalInfo = document.getElementById("modal-info");
const modalVideo = document.getElementById("modal-video");

function closeModal() {
    modal.style.display = "none";
    modalVideo.innerHTML = "";
}

class Song {
    constructor(title, artist, album, year, genre, imageFile, youtubeEmbed) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.imageFile = imageFile;
        this.youtubeEmbed = youtubeEmbed;
    }

    getCard() {
        const song = this;
        const card = document.createElement("article");
        card.className = "song-card";

        const button = document.createElement("button");
        button.className = "song-button";
        button.type = "button";
        button.onclick = function() {
            song.openModal();
        };

        const header = document.createElement("section");
        header.className = "song-card-header";
        const title = document.createElement("h4");
        const artist = document.createElement("p");
        title.innerHTML = this.title;
        artist.innerHTML = "By " + this.artist;
        header.appendChild(title);
        header.appendChild(artist);

        const image = document.createElement("img");
        image.className = "song-cover";
        image.src = "images/" + this.imageFile;
        image.alt = this.title + " cover art";

        button.appendChild(header);
        button.appendChild(image);
        card.appendChild(button);

        return card;
    }

    openModal() {
        modalTitle.innerHTML = this.title;
        modalArtist.innerHTML = "By " + this.artist;
        modalInfo.innerHTML =
            "<li><strong>Album:</strong> " + this.album + "</li>" +
            "<li><strong>Year:</strong> " + this.year + "</li>" +
            "<li><strong>Genre:</strong> " + this.genre + "</li>";

        modalVideo.innerHTML = this.youtubeEmbed;

        modal.style.display = "block";
    }
}

const songs = [];
songs.push(new Song("Still Sleepless", "D.O.D feat. Carla Monroe", "Single", 2024, "House", "stillsleepless.jpeg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/t5Da9RjQDgM" title="D.O.D feat. Carla Monroe - Still Sleepless (Official Lyric Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'));
songs.push(new Song("Bad Dreams", "Teddy Swims", "Single", 2024, "Soul Pop", "bad_dreams.jpeg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/Qh8QwVYOSVU" title="Teddy Swims - Bad Dreams (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'));
songs.push(new Song("\"2024\"", "Playboi Carti", "I AM MUSIC", 2024, "Hip-Hop", "2024.jpeg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/YG3EhWlBaoI" title="2024 prod. ojivolta, earlonthebeat, and Kanye West" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'));
songs.push(new Song("HEARTBEAT", "Travis Scott", "Single", 2024, "Hip-Hop", "heartbeat.jpg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/I-Ix7Mneop4" title="Travis Scott - HEARTBEAT (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'));

for (let i = 0; i < songs.length; i++) {
    songsContainer.appendChild(songs[i].getCard());
}

closeModalButton.onclick = closeModal;

modal.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};
