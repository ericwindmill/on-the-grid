# Background

On The Grid is a tool that teached developers about the newest CSS layout feature: Grid. 

Grid offers a simple and straight forward way to layout HTML elements on a webpage. As of March 2017, CSS Grid is supported by all major browsers. Grid is the future of webpage layout.

There are 27 total CSS properties that shipped with grid and allow a developer to manipulate the layout of a page. This project teaches the most important properties that you need to get up and running.

#Functionality and MVP

On the Grid will allow users to:
  *Change preset grid layout features and see results in real-time.
  *Copy and paste the output code created by the uniqie set of display properties they set.
  *Change the number of items to be positioned by grid, as well as the size of each item.
  *Learn the basics of CSS Grid.

Additonally, the page will have:
  *A list of resources to continue learning. 
  *A production README.

#Wireframe

This app is essentially a single screen in which the user can input different CSS grid properties, and it will have two output boxes. One will output the code itself, and one will render the grid created by properties input. This render is the main attraction visually. There will also be a small area in the bottom right that provides any meta information or information required to use the tool (although I plan for the tool to be very self-explanatory). 

![On the Grid wireframe](https://github.com/ericwindmill/on-the-grid/blob/master/docs/on_the_grid_main_wireframe.png)

#Architecture and Technologies
The project will use the following technologies:
  *Javascript and jQuery will provide the main functionality (injecting the input changes into the code and rerendering)
  *The design will use pure CSS (and obviously utilize Grid!)
  *Basic HTML elements will be inserted into the DOM based on user input. 

#Implementation Timeline

###Day 1:
*Setup the project, node modules, and technologies.
*Build the basic HTML/CSS layout of the page.

###Day 2:
*Build out the  starting 'blocks' to be manipulated by user input.
*Build out the funcationallity to insert new blocks based on user input.

###Day 3:
*Build out the functionality to change the size of the blocks.
This day will be entirely devoted to building the logic that will change the output based on user input. This includes accepting user input, injecting the input into the code for the output, and rendering the output in two different ways. 

###Day 4:
*Wrap up main functionality. 
*Add the style flare. 


#Bonus Features:
*Add a game feature that requires features to use the tool to create a certain given layout. (I.E. - "Use grid features to create a layout that has a navbar at the top that is 100% of the screen width, a main content feature that is 70% of the screen width, and a side bar that is 30% of the screen width." And the screen will provide 3 red boxes that turn green when the user has successfully created that grid.)