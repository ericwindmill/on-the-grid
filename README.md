## Background
On The Grid is a tool that teaches developers about the newest CSS layout feature: Grid. 

Grid offers a simple and straight forward way to layout HTML elements on a webpage. As of March 2017, CSS Grid is supported by all major browsers. Grid is the future of webpage layout.

There are 27 total CSS properties that shipped with grid, which will be taught by this tool.

## Functionality and MVP
On the Grid will allow users to:
* Change grid layout features and see results in real-time.
* Copy and paste the output code created by the uniqie set of display properties they set.
* Change the number of items to be positioned by grid, as well as the size of each item. This is based on grid location (i.e. which column and row its positioned in.)
* Change the size of individual grid rows and columns.
* Adjust grid features such as "grid-auto-flow", "justify-content", "justify-items", "align-content", "align-items", "align-self", "justify-self"
* Select grid items by clicking on them and adjusting the properties individually. This is the most important functionality because it will allow users to dynamically create real webpage layouts.
* Test their skills with a grid game. A user will have to change the grid properities in order to achieve a given layout. (Inspired by Flexbox Froggy)

Additonally, the page will have:
* A list of resources to continue learning. 
* A production README.
* An incredible UX and Design, because that's what I'm interested in showing off. 

## Wireframe

This app is essentially a single screen in which the user can input different CSS grid properties, and it will have two output boxes. One will output the code itself, and one will render the grid created by properties input. This render is the main attraction visually. There will also be a small area in the bottom right that provides any meta information or information required to use the tool (although I plan for the tool to be very self-explanatory). 

![On the Grid wireframe](https://github.com/ericwindmill/on-the-grid/blob/master/docs/on_the_grid_main_wireframe.png)

## Architecture and Technologies
The project will use the following technologies:
* Javascript will provide the main functionality (injecting the input changes into the code and rerendering)
* The design will use pure CSS (and obviously utilize Grid!)
* Basic HTML elements will be inserted into the DOM based on user input.

## Implementation Timeline

### Day 1:
* Setup the project, node modules, and technologies.
* Build the HTML/CSS layout of the page.
* Build out the  starting 'blocks' to be manipulated by user input.
* Build out the funcationallity to insert new blocks based on user input.

### Day 2:
This day will be entirely devoted to building the logic that will change the output based on user input. This includes accepting user input, injecting the input into the code for the output, and rendering the output on the grid. Properties that will need to be affected here are:
  * Number of Rows
    * Include the option for 'auto'
  * Number of Columns
    * Include the option for 'column'
  * Resize row based on choosing row number and size inputed by user.
    * Include information and ability to use minmax() and fr units.
  * Resize column based on choosing column number and size inputed by user.
    * Include information and ability to use minmax() and fr units.
  * grid-auto-flow
    *column or row
  * grid-row-gap
    * Include ability to use fr units.
  * grid-column-gap
    * Include ability to use fr units.
  * number of grid items
  * justify-content
  * justify-items
  * align-items
  * align-content
  * grid-auto-columns
      * Include ability to use fr units.
  * grid-auto-rows
      * Include ability to use fr units.

### Day 3:
* Add functionality to manipulate grid items when clicked.
  * Click on the grid-item and render a form, which allows user to manipuate the following properties:
    * grid-column-start
      * Allow user to use column number or 'span' functionality
    * grid-row-start
      * Allow user to use column number or 'span' functionality
    * grid-row-end
      * Allow user to use column number or 'span' functionality
    * grid-column-end
      * Allow user to use column number or 'span' functionality
    * justify-self
    * justify-end


### Day 4:
* Build game feature that requires users to change the grid properties in order to achieve a certain given layout. (I.E. - "Use grid features to create a layout that has a navbar at the top that is 100% of the screen width, a main content feature that is 70% of the screen width, and a side bar that is 30% of the screen width." And the screen will provide 3 red boxes that turn green when the user has successfully created that grid.)


# Bonus Features:
* Add multiple levels.
