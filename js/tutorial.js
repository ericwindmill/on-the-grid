const level1TargetLocations = {
  'HEADER': {
    'grid-column': ['2 / 10', '2 / span 8'],
    'grid-row': ['1 / 3', '1 / span 2']
  },
  'MAIN': {
    'grid-column': ['2 / 8', '2 / span 6'],
    'grid-row': ['3 / 10', '3 / span 7']
  },
  'ASIDE': {
    'grid-column': ['8 / 10', '8 / span 2'],
    'grid-row': ['3 / 10', '3 / span 7']
  },
  'FOOTER': {
    'grid-column': ['2 / 10', '2 / span 8'],
    'grid-row': ['10 / 11', '10 / span 1']
  }
}
const level2TargetLocations = {
  'HEADER': {
    'grid-column': ['2 / 10', '2 / span 8'],
    'grid-row': ['1 / 3', '1 / span 2']
  },
  'MAIN': {
    'grid-column': ['2 / 8', '2 / span 6'],
    'grid-row': ['3 / 10', '3 / span 7']
  },
  'ASIDE': {
    'grid-column': ['8 / 10', '8 / span 2'],
    'grid-row': ['3 / 10', '3 / span 7']
  },
  'FOOTER': {
    'grid-column': ['2 / 10', '2 / span 8'],
    'grid-row': ['10 / 11', '10 / span 1']
  },
  'NAV': {
    'grid-column': ['3 / 9', '3 / span 6'],
    'grid-row': ['2 / 3', '2 / span 3']
  }
}

const levelTargetLocations = {
  1: {
    'HEADER': {
      'grid-column': ['2 / 10', '2 / span 8'],
      'grid-row': ['1 / 3', '1 / span 2']
    },
    'MAIN': {
      'grid-column': ['2 / 8', '2 / span 6'],
      'grid-row': ['3 / 10', '3 / span 7']
    },
    'ASIDE': {
      'grid-column': ['8 / 10', '8 / span 2'],
      'grid-row': ['3 / 10', '3 / span 7']
    },
    'FOOTER': {
      'grid-column': ['2 / 10', '2 / span 8'],
      'grid-row': ['10 / 11', '10 / span 1']
    }
  },
  2: {
    'HEADER': {
      'grid-column': ['2 / 10', '2 / span 8'],
      'grid-row': ['1 / 3', '1 / span 2']
    },
    'MAIN': {
      'grid-column': ['2 / 8', '2 / span 6'],
      'grid-row': ['3 / 10', '3 / span 7']
    },
    'ASIDE': {
      'grid-column': ['8 / 10', '8 / span 2'],
      'grid-row': ['3 / 10', '3 / span 7']
    },
    'FOOTER': {
      'grid-column': ['2 / 10', '2 / span 8'],
      'grid-row': ['10 / 11', '10 / span 1']
    },
    'NAV': {
      'grid-column': ['3 / 9', '3 / span 6'],
      'grid-row': ['2 / 3', '2 / span 3']
    }
  }
}



class Tutorial {
  constructor () {
    this.gridWrapper = document.getElementById('wrapper')
    this.divs = ['HEADER', 'MAIN', 'ASIDE', 'FOOTER']
    this.level1TargetLocations = level1TargetLocations
    this.currentLesson = 1
    this.winningScores = {
      1: 8,
      2: 10
    }
    this.level1WinningScore = 8
    this.level2WinningScore = 10

  }

  toggleGridView () {
    let gridOverlay = document.getElementById('tutorial-overlay')
    if (gridOverlay.style.visibility === 'hidden' || gridOverlay.style.visibility === '') {
      gridOverlay.style.visibility = 'visible'
    } else {
      gridOverlay.style.visibility = 'hidden'
    }
  }

  // Clears the components from the playground and loads the base components for the tutorial.
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
    let playgroundOverlay = document.getElementById('playground-overlay')
    playgroundOverlay.style.visibility = 'hidden'
    playgroundOverlay.style.position = 'relative'
  }

  // sets up everything for lesson 1 of the tutorial
  setUpTutorial () {
    this.gridWrapper.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
    this.gridWrapper.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
    this.divs.forEach(div => {
      let element = document.createElement('div')
      let targetElement = document.createElement('div')
      element.id = div
      targetElement.id = `overlay-${div}`
      element.innerHTML = div
      targetElement.innerHTML = `put ${div} here`
      element.className = `grid-item ${div.toLowerCase()}-tutorial`
      targetElement.className = `grid-item ${div.toLowerCase()}-overlay`
      targetElement.style.zIndex = 1
      targetElement.style.zIndex = 2
      this.gridWrapper.appendChild(element)
      this.gridWrapper.appendChild(targetElement)
    })
  }

  handleInputs (input) {
    let divName = input.id.split('-')[0].toUpperCase()
    let selectedDiv = document.getElementById(divName)

    if (divName === 'HEADER') {
      let headerCol = document.getElementById('header-col-input')
      let headerRow = document.getElementById('header-row-input')
      selectedDiv.style.gridColumn = headerCol.value
      selectedDiv.style.gridRow = headerRow.value
    } else {
      let entry = input.value.replace(/\s/g, '').replace('span', 'span ').split(':')
      if (entry[0] === 'grid-column') {
        selectedDiv.style.gridColumn = entry[1]
      } else if (entry[0] === 'grid-row') {
        selectedDiv.style.gridRow = entry[1]
      } else {}
    }
    this.checkWon()
  }

  formatCSSpropsForJS (property) {
    let prop = property.split('-')
    var formatted = [prop[0]]
    for (var i = 1; i < prop.length; i++) {
      formatted.push(prop[i].charAt(0).toUpperCase() + prop[i].slice(1))
    }

    return formatted.join('')
  }
  // I need to pass in informaion, such as the level winning score.
  checkWon () {
    let correctDivCount = 0
    this.divs.forEach(element => {
      let div = document.getElementById(element)
      Object.entries(levelTargetLocations[this.currentLesson]).forEach(([k, v]) => {
        if (k === div.id) {
          // let jsProperties = []
          // Object.keys(v).forEach(property => {
          //   jsProperties.push(this.formatCSSpropsForJS(property))
          // })

          if (div.style.gridColumn === v['grid-column'][0] || div.style.gridColumn === v['grid-column'][1]) {
            correctDivCount += 1
          }
          if (div.style.gridRow === v['grid-row'][0] || div.style.gridRow === v['grid-row'][1]) {
            correctDivCount += 1
          }
        }
      })
    })
    if (correctDivCount === this.winningScores[this.currentLesson]) {
      this.nextLesson()
    }
  }

  // here is where I should pass in a new lesson
  nextLesson () {
    document.getElementById('lesson-1-copy').innerHTML = "<h1>Frantastic Grid Work!<h1><br><br><h2> Now check out how easy it is to overlay items!</h2><br>Grid items can easily be laid over other items, so long as they're established later in the HTML. Test it it out by putting that Nav Bar where it belongs."
    document.getElementById('tutorial-editor-nav').style.visibility = 'visible'
    let nav = document.createElement('div')
    nav.id = 'NAV'
    nav.className = `grid-item nav-tutorial`
    nav.innerHTML = 'NAV'
    
    this.gridWrapper.appendChild(nav)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tutorial = new Tutorial()
  const tutorialLink = document.getElementById('begin-tutorial-link')
  tutorialLink.addEventListener('click', function () {
    tutorial.beginTutorial()
  })

  let toggleButton = document.getElementById('tutorial-toggle-button')
  toggleButton.addEventListener('click', () => {
    tutorial.toggleGridView()
  })

  let inputs = document.querySelectorAll('.editor-inputs')
  inputs.forEach(input => {
    input.addEventListener('change', () => {
      tutorial.handleInputs(input)
    })
  })
})