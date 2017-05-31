Properties to manipulate:
  * minmax?
  * auto-fill / auto-fit?
  * align / justify content? 
 
Ideas:
  * make an overlay for main thing
    * this wouldn't be too hard. Just make an overlay that 
      updates the same way as the normal grid.
  * style turtoial index items like actual browser things.
  * style window like browser
  * add 'goal layout' to tutorial
  
Bugs:
  * blocks expand past grid if you type in too much text.
  * all 'enters' should be leave-focus or whatever
  * new grid items need to be content editable.
  * Handle resizing of the grid overlay


    let divName = input.id.split('-')[0].toUpperCase()
    let selectedDiv = document.getElementById(divName)

    if (divName === 'HEADER') {
      selectedDiv.style.gridColumn = input.value
      selectedDiv.style.gridRow = input.value
    }

    // let header = document.getElementById('HEADER')
    // let main = document.getElementById('MAIN')

    // header.style.gridColumn = input.value
    // header.style.gridRow = input.value

    // let entry = input.value.replace(/\s/g, '').split(':')
    //   if (entry[0] === 'grid-column') {
    //   selectedDiv.style.gridColumn = entry[1]
    // }