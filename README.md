# On the Grid 
[On The Grid](https://ericwindmill.github.io/on-the-grid/) is a sandbox that teaches web developers how to use CSS Grid.

![On The Grid](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_1000/v1496430370/Screen_Shot_2017-06-02_at_12.04.35_PM_osnafz.png)

There are two modes in CSS Grid. The main page features the sand box mode. Its your space to go crazy with different Grid properties! Or, you can click the button that takes you to the 'Tutorial' mode, where you'll follow instructions that walk you through setting up a grid.

# Technology
This app is made with 100% pure Javascript, HTML5 and CSS3. It was a personal goal of mine to avoid any libraries or preprocessors.

# Implementation
In order to build a single-page React Style app with only javascript, I had to create many HTML sections and use DOM manipulation to render them based on user interaction.

The app was built in a way that allows me to add new lessons by simply adding to the Javascript objects created at the top of the tutorial.js file.



```javascript
// This is an example of lesson 2.
const lessons = {
  2: {
    'lesson-copy': "<h1>Frantastic Grid Work!<h1><h2> Now check out how easy it is to overlay items!</h2><br>Grid items can easily be laid over other items, so long as they're established later in the HTML. Test it it out by putting that Nav Bar where it belongs.",
    'lesson-editor-text-id': 'lesson-2-editor',
    'lesson-datatip': "grid-column is short hand for grid-column-start / grid-column-end. It takes two inputs like so: ' x / y'.&#010; &#010; Bonus: You can try '1 / span 2' rather than '1 / 3'.'",
    'delete-divs': [],
    'new-divs': [
      {
        'div-type': 'NAV',
        'classes': 'nav-tutorial',
        'div-text': 'NAV'
      },
      {
        'div-type': 'overlay-NAV',
        'classes': 'nav-overlay',
        'div-text': 'put NAV here'
      }
    ]
  },
```

```javascript
// This function builds the lesson... 
nextLesson (lesson) {
    let lessonData = lessons[this.currentLesson]
    document.getElementById('lesson-copy').innerHTML = lessonData['lesson-copy']
    let textEditor = document.getElementById(lessonData['lesson-editor-text-id']) || ''
    if (textEditor) {
      textEditor.style.visibility = 'visible'
    }

    lessonData['delete-divs'].forEach(div => {
      let parent = document.getElementById('wrapper')
      let node = document.getElementById(div)
      parent.removeChild(node)
    })

    lessonData['new-divs'].forEach(div => {
      let node = document.createElement('div')
      node.id = div['div-type']
      node.className = `grid-item ${div['classes']}`
      node.innerHTML = div['div-text']
      this.gridWrapper.appendChild(node)
      this.divs.push(div['div-type'])
    })
  }
```



# Future Features
I plan to continue adding lessons to the tutorial mode.