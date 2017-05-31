class Tutorial {
  constructor () {
    this.gridWrapper = document.getElementById('wrapper')
    this.divs = ['HEADER', 'MAIN', 'ASIDE', 'FOOTER']
  }

  beginTutorial () {
    let currentGrid = document.querySelectorAll('#wrapper div')
    currentGrid.forEach(item => {
      this.gridWrapper.children
      this.gridWrapper.removeChild(item)
    })
    let controls = document.getElementById('user-input')
    controls.style.visibility = 'hidden'
    controls.style.position = 'absolute'
    controls.style.zIndex = '-1'
    let textEditor = document.getElementById('text-editor')
    textEditor.style.visibility = 'visible'
    textEditor.style.position = 'relative'
    controls.style.zIndex = '1'
    let info = document.getElementById('playground-information')
    info.style.visibility = 'hidden'
    info.style.position = 'absolute'
    controls.style.zIndex = '-1'
    let tutorialInfo = document.getElementById('tutorial-information')
    tutorialInfo.style.visibility = 'visible'
    tutorialInfo.style.position = 'relative'
    controls.style.zIndex = '1'
    this.setUpTutorial()
  }

  setUpTutorial () {
    let overlay = document.getElementById('tutorial-overlay')
    overlay.style.display = 'grid'
    this.gridWrapper.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
    this.gridWrapper.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
    this.divs.forEach(div => {
      let element = document.createElement('div')
      element.id = div
      element.innerHTML = div
      element.className = `grid-item ${div.toLowerCase()}-tutorial`
      this.gridWrapper.appendChild(element)
    })
  }

  toggleGridView () {
    let gridOverlay = document.getElementById('tutorial-overlay')
    if (gridOverlay.style.visibility === 'hidden') {
      gridOverlay.style.visibility = 'visible'
    } else {
      gridOverlay.style.visibility = 'hidden'
    }
  }
}



document.addEventListener('DOMContentLoaded', () => {
  const tutorial = new Tutorial()
  const tutorialLink = document.getElementById('begin-tutorial-link')
  tutorialLink.addEventListener('click', function () {
    tutorial.beginTutorial()
  })

  let toggleButton = document.getElementById('toggle-button')
  toggleButton.addEventListener('click', () => {
    tutorial.toggleGridView()
  })
})
