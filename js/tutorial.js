const levels = {

}
class Tutorial {
  constructor() {
    
  }

  beginTutorial () {
    let gridWrapper = document.getElementById('wrapper')
    let currentGrid = document.querySelectorAll('#wrapper div')
    currentGrid.forEach(item => {
      gridWrapper.children
      gridWrapper.removeChild(item)
    })

    let info = document.get

  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tutorial = new Tutorial()
  const tutorialLink = document.getElementById('begin-tutorial-link')
  tutorialLink.addEventListener('click', function () {
    tutorial.beginTutorial()
  })
})