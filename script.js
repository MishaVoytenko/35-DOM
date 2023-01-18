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
function createModal() {
  const modal = document.createElement("div")
  modal.classList.add('modal')
  document.body.append(modal)
  modal.innerHTML = '<div>' + "<button class='btn_close'>Закрити</button>" + "<ol id='list'></ol>" + "</div>"

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

btn.addEventListener("click", createModal)


// const list = document.querySelector('#list')

// playList.forEach((item) => {
//   // const liHTML = '<li>' + "<div>" + item.author + "</div>" + "<div>" + item.song + "</div>" + '</li>'
//   // list.innerHTML += liHTML
//   const li = document.createElement("li")
//   li.innerHTML = item.song
//   list.append(li)
// })

