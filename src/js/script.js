const baseMusicas = [

    {
        'name': 'Master of Puppets',
        'artist': 'Metallica',
        'path': './src/audio/masterofpuppets.mp3',
        'album': 'Master of Puppets',
    },
        {
        'name': 'And Justice For All',
        'artist': 'Metallica',
        'path': './src/audio/andjusticeforall.mp3',
        'album': 'And Justice For All',
    },
            {
        'name': 'Bohemian Rhapsody',
        'artist': 'Queen',
        'path': './src/audio/bohemianrhapsody.mp3',
        'album': 'A Night at the Opera',
    },
                {
        'name': 'Dont Stop me Now',
        'artist': 'Queen',
        'path': './src/audio/dontstopmenow.mp3',
        'album': 'Jazz',
    },
                    {
        'name': 'Deuce',
        'artist': 'Kiss',
        'path': './src/audio/deucekiss.mp3',
        'album': 'Deuce',
    },
                        {
        'name': 'Sure Know Something',
        'artist': 'Kiss',
        'path': './src/audio/sureknowsomething.mp3',
        'album': 'Dynasty',
    },
                            {
        'name': 'Mr. Crowley',
        'artist': 'Ozzy Osbourne',
        'path': './src/audio/mrcrowley.mp3',
        'album': 'Blizzard of Ozz',
    }
];

const listaMusicas = document.querySelector('.listaMusicas');

const tagAudio = document.getElementById('saidaAudio');
const primeiraMusica = baseMusicas[0];
tagAudio.src = primeiraMusica.path;

const botaoPausar = document.getElementById('btnPause');
const botaoPlay = document.getElementById('btnControlPlay');

let musicaAtual = 0;

function construirPlayList(musica, musicaId){   
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement('p');
    const nomeAlbum = document.createElement('p');

    musicaElemento.dataset.id = musicaId;

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    musicaElemento.addEventListener('click', tocarMusica);

    listaMusicas.appendChild(musicaElemento);
}


for(let contador = 0; contador < baseMusicas.length; contador++) {    
    construirPlayList(baseMusicas[contador], contador);
}

function tocarMusica(evento){
    const elementoClicado = evento.currentTarget;

    if(elementoClicado.tagName == 'LI'){
        const musicaId = elementoClicado.dataset.id;
        const musicaSelecionada = baseMusicas[musicaId];
        tagAudio.src = musicaSelecionada.path;
        musicaAtual = Number(musicaId);
        tagAudio.play();
       
    } else{
        if(tagAudio.paused){
            tagAudio.play();
        } else{
            tagAudio.pause();
        }
    }
}

botaoPlay.addEventListener('click', tocarMusica);

function pausarMusica(){
    tagAudio.pause();
}
botaoPausar.addEventListener('click', pausarMusica);


function tocarProximaMusica(){
    if(musicaAtual === baseMusicas.length - 1){
        musicaAtual = 0;
    } else{
        musicaAtual++;
    }

    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play();
}
const btnControlNext = document.getElementById('btnControlNext');
btnControlNext.addEventListener('click', tocarProximaMusica)

function tocarMusicaAnterior(){
    if(musicaAtual === 0){
        musicaAtual = baseMusicas.length - 1;
    } else{
        musicaAtual--;
    }

    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play();
}
const bthControlPrev = document.getElementById('btnControlPrev');
btnControlPrev.addEventListener('click', tocarMusicaAnterior)

