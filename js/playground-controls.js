document.addEventListener('DOMContentLoaded', () => {
  // ======== "Global" vars ======== //
  const wrapper = document.getElementById('wrapper')
  const gridItems = document.querySelectorAll('#wrapper div')
  const playgroundOverlay = document.getElementById('playground-overlay')

  // ======== Grid Items Color ======== //
  let nextColor = 100
  gridItems.forEach(item => {
    item.style.backgroundColor = `hsl(336, 100%, ${nextColor}%`
    nextColor -= 2
  })

  // ======== Toggle Overlay ======== //
  const toggleButton = document.getElementById('playground-toggle-button')
  toggleButton.addEventListener('click', function () {
    if (playgroundOverlay.style.visibility === 'hidden' || playgroundOverlay.style.visibility === '') {
      playgroundOverlay.style.visibility = 'visible'
    } else {
      playgroundOverlay.style.visibility = 'hidden'
    }
  })

  // ======== Inputs to change row / column numbers ======== //
  let rowNum = 3 
  let columnNum = 3 
  document.getElementById('add-row').onclick = () => {
    rowNum += 1
    wrapper.style.gridTemplateRows = '1fr '.repeat(rowNum)
     // Add to grid overlay
    playgroundOverlay.style.gridTemplateRows = '1fr '.repeat(rowNum)
    for (let i = 1; i <= columnNum; i++) {
      let overlayItem = document.createElement('SPAN')
      overlayItem.className = 'grid-spot'
      playgroundOverlay.appendChild(overlayItem)
    }
  }
  document.getElementById('delete-row').onclick = () => {
    rowNum -= 1
    wrapper.style.gridTemplateRows = '1fr '.repeat(rowNum)
    // Remove from grid overlay
    playgroundOverlay.style.gridTemplateRows = '1fr '.repeat(rowNum)
    for (let i = 1; i <= columnNum; i++) {
      let overlayItem = playgroundOverlay.childNodes[i]
      playgroundOverlay.removeChild(overlayItem)
    }
  }
  document.getElementById('auto-row').onclick = () => {
    rowNum = 3
    wrapper.style.gridTemplateRows = `auto`
    playgroundOverlay.style.gridTemplateRows = `auto`
    let spotsToRemove = playgroundOverlay.childElementCount - wrapper.childElementCount
    if (playgroundOverlay.childElementCount > wrapper.childElementCount) {
      for (let i = 1; i <= spotsToRemove; i++) {
        let overlayItem = playgroundOverlay.childNodes[i]
        playgroundOverlay.removeChild(overlayItem)
      }
    }
  }
  document.getElementById('add-column').onclick = () => {
    columnNum += 1
    wrapper.style.gridTemplateColumns = '1fr '.repeat(columnNum)
    playgroundOverlay.style.gridTemplateColumns = '1fr '.repeat(columnNum)
    for (let i = 1; i <= rowNum; i++) {
      let overlayItem = document.createElement('SPAN')
      overlayItem.className = 'grid-spot'
      playgroundOverlay.appendChild(overlayItem)
    }
  }
  document.getElementById('delete-column').onclick = () => {
    columnNum -= 1
    wrapper.style.gridTemplateColumns = '1fr '.repeat(columnNum)
    playgroundOverlay.style.gridTemplateColumns = '1fr '.repeat(columnNum)
    for (let i = 1; i <= rowNum; i++) {
      let overlayItem = playgroundOverlay.childNodes[i]
      playgroundOverlay.removeChild(overlayItem)
    }
  }
  document.getElementById('auto-column').onclick = () => {
    columnNum = 3
    wrapper.style.gridTemplateColumns = `auto`
    playgroundOverlay.style.gridTemplateColumns = `auto`
    let spotsToRemove = playgroundOverlay.childElementCount - wrapper.childElementCount
    if (playgroundOverlay.childElementCount > wrapper.childElementCount) {
      for (let i = 1; i <= spotsToRemove; i++) {
        let overlayItem = playgroundOverlay.childNodes[i]
        playgroundOverlay.removeChild(overlayItem)
      }
    }
  }

  // ======== Inputs to change row / column size ======== //
  const resizeRowNum = document.getElementById('row-num-input')
  const resizeRowSize = document.getElementById('row-resize-input')
  const currentRows = wrapper.style.gridTemplateRows.split(" ")
  resizeRowNum.onchange = e => {
    currentRows[parseInt(resizeRowNum.value) - 1] = resizeRowSize.value
    wrapper.style.gridTemplateRows = currentRows.join(' ')
    playgroundOverlay.style.gridTemplateRows = currentRows.join(' ')
  }
  resizeRowSize.onchange = e => {
    currentRows[parseInt(resizeRowNum.value) - 1] = resizeRowSize.value
    wrapper.style.gridTemplateRows = currentRows.join(' ')
    playgroundOverlay.style.gridTemplateRows = currentRows.join(' ')
  }

  const resizeColumnNum = document.getElementById('column-num-input')
  const resizeColumnSize = document.getElementById('column-resize-input')
  const currentColumns = wrapper.style.gridTemplateColumns.split(' ')
  resizeColumnNum.onchange = e => {
    currentColumns[parseInt(resizeColumnNum.value) - 1] = resizeColumnSize.value
    wrapper.style.gridTemplateColumns = currentColumns.join(' ')
    playgroundOverlay.style.gridTemplateColumns = currentColumns.join(' ')
  }
  resizeColumnSize.onchange = e => {
    currentColumns[parseInt(resizeColumnNum.value) - 1] = resizeColumnSize.value
    wrapper.style.gridTemplateColumns = currentColumns.join(' ')
    playgroundOverlay.style.gridTemplateColumns = currentColumns.join(' ')
  }

  // ======== Inputs to change grid gap ======== //
  const rowGap = document.getElementById('row-gap-user-input')
  rowGap.onchange = e => {
    wrapper.style.gridRowGap = rowGap.value
  }
  const columnGap = document.getElementById('column-gap-user-input')
  columnGap.onchange = e => {
    wrapper.style.gridColumnGap = columnGap.value
  }

  // ========  Buttons to change grid auto flow ======== //
  document.getElementById('flow-column-button').onclick = () => {
    wrapper.style.gridAutoFlow = 'column'
    playgroundOverlay.style.gridAutoFlow = 'column'
  }
  document.getElementById('flow-row-button').onclick = () => {
    wrapper.style.gridAutoFlow = 'row'
    playgroundOverlay.style.gridAutoFlow = 'row'
  }

  // ========  Buttons to change justification and alignment ======== //
  const justifySelection = document.getElementById('justify-select')
  justifySelection.onchange = () => {
    wrapper.style.justifyItems = justifySelection.value
  }

  const alignSelection = document.getElementById('align-select')
  alignSelection.onchange = () => {
    wrapper.style.alignItems = alignSelection.value
  }

  const justifyContentSelection = document.getElementById('justify-content-select')
  justifyContentSelection.onchange = () => {
    wrapper.style.justifyContent = justifyContentSelection.value
  }

  const alignContentSelection = document.getElementById('align-content-select')
  alignContentSelection.onchange = () => {
    wrapper.style.alignContent = alignContentSelection.value
  }

  // ======== Buttons to change number of grid item ======== //
  let gridNum = 7
  const lyrics = ['and', 'nothing', 'to', 'get', 'hung', 'about', 'Strawberry', 'Fields', 'Forever',
                  'cause', "I'm", 'going', 'down', 'to', 'Strawberry', 'Fields', 'nothing', 'is', 'real'
                 ]
  let lyricsIdx = 0
  document.getElementById('add-element').onclick = () => {
    gridNum += 1
    if (lyricsIdx >= lyrics.length) {
      lyricsIdx = 0
    }
    var gridItem = document.createElement('DIV')
    gridItem.innerHTML = lyrics[lyricsIdx]
    lyricsIdx += 1
    gridItem.className = 'grid-item'
    gridItem.contentEditable = 'true'
    gridItem.style.backgroundColor = `hsl(336, 100%, ${nextColor}%`
    nextColor -= 2
    wrapper.appendChild(gridItem).id = `display-grid-${gridNum}`
    selectors()
  }

  document.getElementById('delete-element').onclick = () => {
    var gridItem = document.getElementById(`display-grid-${gridNum}`)
    gridNum -= 1
    nextColor += 2
    wrapper.removeChild(gridItem)
  }

  // ======== Select a Grid Item by Clicking ======== //
  let item;  
  let selectGridItem = e => {
    item = e.target
    selectors()
    if (item.nodeName === 'DIV') {
      item.style.border = '2px slategrey solid'
    } else {
      item.parentNode.style.border = '2px slategrey solid'
    }
  }
  const selectors = () => {
    document.querySelectorAll('#wrapper div').forEach(div => {
      div.addEventListener('click', selectGridItem)
      div.style.border = ''
    })
  }
  selectors()

  // ======== Change Grid Item Column Pos ======== //
  const gridColStartInput = document.getElementById('grid-column-start')
  gridColStartInput.onchange = e => {
    item.style.gridColumnStart = gridColStartInput.value
  }
  const gridColEndInput = document.getElementById('grid-column-end')
  gridColEndInput.onchange = e => {
    item.style.gridColumnEnd = gridColEndInput.value
  }
  const gridRowStartInput = document.getElementById('grid-row-start')
  gridRowStartInput.onchange = e => {
    item.style.gridRowStart = gridRowStartInput.value
  }
  const gridRowEndInput = document.getElementById('grid-row-end')
  gridRowEndInput.onchange = e => {
    item.style.gridRowEnd = gridRowEndInput.value
  }

// ======== Change Grid Item Self Justification / Alignment ======== //
  const justifySelf = document.getElementById('justify-self-select')
  justifySelf.onchange = () => {
    item.style.justifySelf = justifySelf.value
  }
  const alignSelf = document.getElementById('align-self-select')
  alignSelf.onchange = () => {
    item.style.alignSelf = alignSelf.value
  }


  // ======== See the Code Modal ======== //
  const seeTheCodeButton = document.getElementById('code-output-button')
  const seeTheCode = document.getElementById('see-the-code-popup')
  let mask = document.getElementById('page-mask')
  // This is included for a different modal, clicking the mask sets ALL modals
  // visibility to hidden
  let tutorialOverModal = document.getElementById('tutorial-over-modal')

  // Properties to Populate
  const modalTemplateRows = document.getElementById('modal-template-rows')
  const modalTemplateColumns = document.getElementById('modal-template-columns')
  const modalAutoFlow = document.getElementById('modal-auto-flow')
  const modalColumnGap = document.getElementById('modal-column-gap')
  const modalRowGap = document.getElementById('modal-row-gap')
  const modalJustify = document.getElementById('modal-justify')
  const modalAlign = document.getElementById('modal-align')

  seeTheCodeButton.addEventListener('click', () => {
    // Show the modal and mask
    seeTheCode.style.visibility = 'visible'
    seeTheCode.style.zIndex = 100
    seeTheCode.style.opacity = 1
    mask.style.visibility = 'visible'
    mask.style.zIndex = 99
    mask.style.opacity = 1

    // Populate each property everytime the modal is shown
    modalTemplateColumns.innerHTML = wrapper.style.gridTemplateColumns
    modalTemplateRows.innerHTML = wrapper.style.gridTemplateRows
    modalAutoFlow.innerHTML = wrapper.style.gridAutoFlow
    modalRowGap.innerHTML = wrapper.style.gridRowGap
    modalColumnGap.innerHTML = wrapper.style.gridColumnGap
    modalJustify.innerHTML = wrapper.style.justifyItems
    modalAlign.innerHTML = wrapper.style.alignItems
  })

  mask.addEventListener('click', () => {
    if (mask.style.visibility === 'visible') {
      mask.style.visibility = 'hidden'
      mask.style.zIndex = -1
      mask.style.opacity = 0
      seeTheCode.style.visibility = 'hidden'
      seeTheCode.style.opacity = 0
      seeTheCode.style.zIndex = -1
      tutorialOverModal.style.visibility = 'hidden'
      tutorialOverModal.style.opacity = 0
      tutorialOverModal.style.zIndex = -1
    }
  })

  // ======== Populate See the Code Modal ======== //

  
  

})
