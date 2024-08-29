import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Main } from './components/Main'

const sections = [
  {
    title: "Meus jogos",
    legend: "Os games que eu mais curto jogar!",
    className: "games-list",
    listItems: [
      {
        link: "https://term.ooo/",
        img: "https://www.maistecnologia.com/wp-content/uploads/2022/01/wordle-esta-a-tornar-se-viral-e-ja-ha-uma-versao-em-portugues-termo-maistecnologia.com-1.png",
        alt: "Imagem de Termo",
        title: "Termo"
      },
      {
        link: "https://www.twitch.tv/directory/category/league-of-legends",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
        alt: "Imagem do jogo League of Legends",
        title: "League of Legends"
      },
      {
        link: "https://www.twitch.tv/directory/category/stardew-valley",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/490744-188x250.jpg",
        alt: "Imagem do jogo Stardew Valley",
        title: "Stardew Valley"
      },
      {
        link: "https://www.twitch.tv/directory/category/outer-wilds",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/489335-188x250.jpg",
        alt: "Imagem do jogo Outer Wilds",
        title: "Outler Wilds"
      },
      {
        link: "https://www.twitch.tv/directory/category/limbo-2010",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/27377_IGDB-188x250.jpg",
        alt: "Imagem do jogo Limbo",
        title: "Limbo"
      },
    ]
  },
  {
    title: "Canais e streamers",
    legend: "Lista de canais e transmissões que não perco!",
    className: "channel-list",
    listItems: [
      {
        link: "https://www.twitch.tv/eskimozin",
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/aaa62dbc-7df8-409e-9549-c9f97d7745cc-profile_image-150x150.png",
        alt: "Imagem de Eskimozin",
        title: "Eskimozin"
      },
      {
        link: "https://www.twitch.tv/lazulilaska",
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/e37986de-30e0-40af-a878-54e4ec1df319-profile_image-150x150.png",
        alt: "Imagem de Lazulilaska",
        title: "Lazulilaska"
      },
      {
        link: "https://www.youtube.com/@gabrielcriador",
        img: "https://yt3.googleusercontent.com/a21n_R-4h9Lk8-NWrA_NkqK20QmwHQylDJan4L9SwG3ICsLMGt2CbB8s_CEgqouTDXD1IecS5Q=s176-c-k-c0x00ffffff-no-rj",
        alt: "Imagem de Gabriel, o Criador",
        title: "Gabriel, o Criador"
      },
      {
        link: "https://www.youtube.com/@gutos_",
        img: "https://yt3.googleusercontent.com/hNXwDjpK9l6QmW9lvjvxesW9m63HAESDWRC34Hi9L3aRCscZgfKAPoNJq6T7p_xXUrg4gj8JoQc=s160-c-k-c0x00ffffff-no-rj",
        alt: "Imagem de Gutos",
        title: "Gutos"
      },
      {
        link: "https://www.youtube.com/@ande",
        img: "https://yt3.googleusercontent.com/CGk2Y-lGFk5vxhYDmBdjDNDVyPVRREoHYsIGwvpEc9FxmYd9lHlX2TUNpH4vdwPpb-T3hXcScQ=s176-c-k-c0x00ffffff-no-rj",
        alt: "Imagem de Ande",
        title: "Ande"
      },
      {
        link: "https://www.youtube.com/@daniel_svs",
        img: "https://yt3.googleusercontent.com/OO-QWrMm4q2UOcySXDdS0B_TXEkXucoClBTNgmgcmw3R5XR38Eawj1TrUhX-zvGNBDuvjaIrxw=s160-c-k-c0x00ffffff-no-rj",
        alt: "Imagem de Daniel SVS",
        title: "Daniel SVS"
      }
    ]
  },
  {
    title: "Minhas redes",
    legend: "Se conecte comigo agora mesmo!",
    className: "social-list",
    listItems: [
      {
        visible: true,
        link: "https://github.com/gabriersdev",
        img: "./img/github.svg",
        alt: "GitHub"
      },
      {
        visible: true,
        link: "https://www.linkedin.com/in/gabrielribeirodev/",
        img: "./img/linkedin.svg",
        alt: "Linkedin"
      },
      {
        visible: true,
        link: "https://www.behance.net/devgabrielribeiro",
        img: "./img/behance.svg",
        alt: "Behance"
      },
      { 
        visible: false,
        link: "https://letterboxd.com/gabriers/",
        img: "#",
        alt: "Letterboxd"
      },
      { 
        visible: false,
        link: "https://cursos.alura.com.br/emprega-one/profile/devgabrielribeiro",
        img: "./img/oracle-one.svg",
        alt: "Oracle ONE"
      }
    ]
  }
]

function App() {
  return(
    <div className="App">
      <Header className="Header"></Header>
      <Main className="Main"/>
    </div>
  );
}

export default App;
export { sections }
