var playList = [

  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
]
const btn = document.getElementById('button')
const btnClose = document.querySelector('.btn_close')

function createList() {
  const list = document.getElementById('list')
  playList.forEach((item) => {
    const liHTML = '<li>' + "<div>" + item.author + "</div>" + "<div>" + item.song + "</div>" + '</li>'
    list.innerHTML += liHTML
    const btnClose = document.querySelector('.btn_close')
    btnClose.addEventListener('click', () => {
      modal.remove()
    })
  })
}

createList();

function showList() {
  const modal = document.querySelector('.modal')
  modal.style.display = "flex"
}

function hideList() {
  const modal = document.querySelector('.modal')
  modal.style.display = "none"
}

btn.addEventListener("click", showList)
btnClose.addEventListener("click", hideList)