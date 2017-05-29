
// ======== "Global" vars ======== //
const wrapper = document.getElementById('wrapper')


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
const currentRows = wrapper
console.log(currentRows.style)

// resizeRowSize.onkeyup = e => {
//   if (e.keyCode === 13) {
//     wrapper.style.gridTemplateRows;
//   }
// }



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

// ======== Buttons to change number of grid item ======== //
let gridNum = 10
document.getElementById('add-element').onclick = () => {
  gridNum += 1
  var gridItem = document.createElement('DIV')
  gridItem.innerHTML = gridNum
  gridItem.className = 'grid-item'
  wrapper.appendChild(gridItem).id = `display-grid-${gridNum}`
}

document.getElementById('delete-element').onclick = () => {
  var gridItem = document.getElementById(`display-grid-${gridNum}`)
  gridNum -= 1
  wrapper.removeChild(gridItem)
}




