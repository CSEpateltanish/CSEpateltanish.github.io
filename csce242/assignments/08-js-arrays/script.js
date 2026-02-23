const moodSelect = document.getElementById("mood-select");
const songLinks = document.getElementById("song-links");
const videoWrap = document.getElementById("video-wrap");

// Associative arrays
const Party = [];
Party["Travis Scott - HEARTBEAT"] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/I-Ix7Mneop4" title="Travis Scott - HEARTBEAT (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
Party["Taio Cruz - Hangover"] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dLhFDYQHDQY" title="Taio Cruz - Hangover (Official Video) ft. Flo Rida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
Party["Pitbull - Give Me Everything"] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/EPo5wWmKEaI" title="Pitbull - Give Me Everything ft. Ne-Yo, Afrojack, Nayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
Party["D.O.D feat. Carla Monroe - Still Sleepless"] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/t5Da9RjQDgM" title="D.O.D feat. Carla Monroe - Still Sleepless (Official Lyric Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
Party["Sonny Fodera, D.O.D & Poppy Baskcomb - Think About Us"] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/j-QsQXnwoPU" title="Sonny Fodera, D.O.D and Poppy Baskcomb - Think About Us" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

const Chill = [];
Chill["\"2024\" - Playboi Carti"] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/YG3EhWlBaoI" title="2024 prod. ojivolta, earlonthebeat, and Kanye West" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
Chill["Maroon 5 - She Will Be Loved"] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/nIjVuRTm-dc" title="Maroon 5 - She Will Be Loved (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
Chill["Teddy Swims - Bad Dreams"] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Qh8QwVYOSVU" title="Teddy Swims - Bad Dreams (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
Chill["Lady Gaga - The Cure"] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/I4IXxzioDAk" title="Lady Gaga - The Cure (Official Lyric Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
Chill["Chris Brown - It Depends"] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/MueOsq3_OVg" title="Chris Brown - It Depends (Audio) ft. Bryson Tiller" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

const moodSongs = [];
moodSongs["Party"] = Party;
moodSongs["Chill"] = Chill;

const hideVideo = () => {
    videoWrap.innerHTML = "";
    videoWrap.classList.add("hidden");
};

const showVideo = (songName, songs) => {
    const embedCode = songs[songName];

    if (embedCode === "") {
        const pendingMessage = document.createElement("p");
        pendingMessage.className = "pending-embed";
        pendingMessage.textContent = "Embed code pending for: " + songName;
        videoWrap.innerHTML = "";
        videoWrap.append(pendingMessage);
    } else {
        videoWrap.innerHTML = embedCode;
    }

    videoWrap.classList.remove("hidden");
};

const showSongs = () => {
    const selectedMood = moodSelect.value;
    songLinks.innerHTML = "";
    hideVideo();

    if (selectedMood === "") {
        return;
    }

    const songs = moodSongs[selectedMood];

    for (let song in songs) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.innerHTML = song;

        a.onclick = (e) => {
            e.preventDefault();
            showVideo(song, songs);
        };

        li.append(a);
        songLinks.append(li);
    }
};

moodSelect.onchange = showSongs;
