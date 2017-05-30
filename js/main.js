import Tutorial from './tutorial'

document.addEventListener('DOMContentLoaded', () => {
  const tutorial = new Tutorial()
  const tutorialLink = document.getElementById('begin-tutorial-link')
  tutorialLink.addEventListener('click', function () {
    tutorial.beginTutorial()
  })
})