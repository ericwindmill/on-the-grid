document.addEventListener('DOMContentLoaded', () => {
  // ======== "Global" vars ======== //
  const wrapper = document.getElementById('wrapper')
  const gridItems = document.querySelectorAll('#wrapper div')

  // ======== Grid Items Color ======== //
  let nextColor = 100
  gridItems.forEach(item => {
    item.style.backgroundColor = `hsl(336, 100%, ${nextColor}%`
    nextColor -= 2
  })

  // ======== Inputs to change row / column numbers ======== //
  let rowNum = 5  
  document.getElementById('add-row').onclick = () => {
    rowNum += 1
    wrapper.style.gridTemplateRows = '1fr '.repeat(rowNum)
  }
  document.getElementById('delete-row').onclick = () => {
    rowNum -= 1
    wrapper.style.gridTemplateRows = '1fr '.repeat(rowNum)
  }
  document.getElementById('auto-row').onclick = () => {
    rowNum = 5
    wrapper.style.gridTemplateRows = `auto`
  }
  let columnNum = 5
  document.getElementById('add-column').onclick = () => {
    columnNum += 1
    wrapper.style.gridTemplateColumns = '1fr '.repeat(columnNum)
  }
  document.getElementById('delete-column').onclick = () => {
    columnNum -= 1
    wrapper.style.gridTemplateColumns = '1fr '.repeat(columnNum)
  }
  document.getElementById('auto-column').onclick = () => {
    columnNum = 5
    wrapper.style.gridTemplateColumns = `auto`
  }

  // ======== Inputs to change row / column size ======== //
  const resizeRowNum = document.getElementById('row-num-input')
  const resizeRowSize = document.getElementById('row-resize-input')
  const currentRows = wrapper.style.gridTemplateRows.split(" ")
  resizeRowNum.onkeyup = e => {
    if (e.keyCode === 13) {
      currentRows[parseInt(resizeRowNum.value) - 1] = resizeRowSize.value
      wrapper.style.gridTemplateRows = currentRows.join(' ')
    }
  }
  resizeRowSize.onkeyup = e => {
    if (e.keyCode === 13) {
      currentRows[parseInt(resizeRowNum.value) - 1] = resizeRowSize.value
      wrapper.style.gridTemplateRows = currentRows.join(' ')
    }
  }

  const resizeColumnNum = document.getElementById('column-num-input')
  const resizeColumnSize = document.getElementById('column-resize-input')
  const currentColumns = wrapper.style.gridTemplateColumns.split(' ')
  resizeColumnNum.onkeyup = e => {
    if (e.keyCode === 13) {
      currentColumns[parseInt(resizeColumnNum.value) - 1] = resizeColumnSize.value
      wrapper.style.gridTemplateColumns = currentColumns.join(' ')
    }
  }
  resizeColumnSize.onkeyup = e => {
    if (e.keyCode === 13) {
      currentColumns[parseInt(resizeColumnNum.value) - 1] = resizeColumnSize.value
      wrapper.style.gridTemplateColumns = currentColumns.join(' ')
    }
  }

  // ======== Inputs to change grid gap ======== //
  const rowGap = document.getElementById('row-gap-user-input')
  rowGap.onkeyup = e => {
    if (e.keyCode === 13) {
      wrapper.style.gridRowGap = rowGap.value
    }
  }
  const columnGap = document.getElementById('column-gap-user-input')
  columnGap.onkeyup = e => {
    if (e.keyCode === 13) {
      wrapper.style.gridColumnGap = columnGap.value
    }
  }

  // ========  Buttons to change grid auto flow ======== //
  document.getElementById('flow-column-button').onclick = () => {
    wrapper.style.gridAutoFlow = 'column'
    // document.getElementById('grid-auto').innerHTML += ' column'
  }
  document.getElementById('flow-row-button').onclick = () => {
    wrapper.style.gridAutoFlow = 'row'
    // document.getElementById('grid-auto').innerHTML = 'grid-auto-flow: row'
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

  // ======== Buttons to change number of grid item ======== //
  let gridNum = 10
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
    console.log('here')
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
  gridColStartInput.onkeyup = e => {
    if (e.keyCode === 13) {
      item.style.gridColumnStart = gridColStartInput.value
    }
  }
  const gridColEndInput = document.getElementById('grid-column-end')
  gridColEndInput.onkeyup = e => {
    if (e.keyCode === 13) {
      item.style.gridColumnEnd = gridColEndInput.value
    }
  }
  const gridRowStartInput = document.getElementById('grid-row-start')
  gridRowStartInput.onkeyup = e => {
    if (e.keyCode === 13) {
      item.style.gridRowStart = gridRowStartInput.value
    }
  }
  const gridRowEndInput = document.getElementById('grid-row-end')
  gridRowEndInput.onkeyup = e => {
    if (e.keyCode === 13) {
      item.style.gridRowEnd = gridRowEndInput.value
    }
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
})

