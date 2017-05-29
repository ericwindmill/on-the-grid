
var divs = Array.from(document.getElementsByClassName('grid-item'))




const wrapper = document.getElementById('wrapper')

document.getElementById('flow-column-button').onclick = () => {
  wrapper.style.gridAutoFlow = 'column'
}
document.getElementById('flow-row-button').onclick = () => {
  wrapper.style.gridAutoFlow = 'row'
}

var gridNum = 10
document.getElementById('add-element').onclick = () => {
  gridNum += 1
  var gridItem = document.createElement('DIV')
  gridItem.innerHTML = gridNum
  gridItem.className = 'grid-item'
  wrapper.appendChild(gridItem).id = `display-grid-${gridNum}`
  console.log(gridNum)
}

document.getElementById('delete-element').onclick = () => {
  var gridItem = document.getElementById(`display-grid-${gridNum}`)
  gridNum -= 1
  console.log(gridItem)
  wrapper.removeChild(gridItem)
  console.log(gridNum)
}



// const form = document.getElementById('input1')
// form.onsubmit = () => {
//   const input2 = document.getElementById('input2')
//   console.log(input2.value)
//   divs.forEach(div => {
//     div.style.color = 'green'
//   })
// }

