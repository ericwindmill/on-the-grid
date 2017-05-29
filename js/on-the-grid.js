
const wrapper = document.getElementById('wrapper')

const rowGap = document.getElementById('row-gap-user-input')
rowGap.onkeyup = e => {
  if (e.keyCode === 13) {
    console.log(rowGap)
    wrapper.style.gridRowGap = rowGap.value
  }
}

const columnGap = document.getElementById('column-gap-user-input')
columnGap.onkeyup = e => {
  if (e.keyCode === 13) {
    console.log(columnGap)
    wrapper.style.gridColumnGap = columnGap.value
  }
}

document.getElementById('flow-column-button').onclick = () => {
  wrapper.style.gridAutoFlow = 'column'
  document.getElementById('grid-auto').innerHTML += ' column'
}
document.getElementById('flow-row-button').onclick = () => {
  wrapper.style.gridAutoFlow = 'row'
  document.getElementById('grid-auto').innerHTML = 'grid-auto-flow: row'
}

var gridNum = 10
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




