# FEWDproject
class project


This is a small website designed to give the visitor some basic information about learning to ride a motorcycle.  Rather than have the visitor be overwhelmed by all of the content at once, the information is broken up into subjects.  

With this project, I decided to try having all of the content load at the beginning in a single HTML file, but to hide all content except what is selected.  When a new button is clicked, the functions in app.js remove the "active" state on the currently selected button and the "show" state from the corresponding content div.  Next the function adds the "active" state and the "show" state to the selected button and div.  

In small screens, the buttons change to a Nav bar, but the functionality stayes the same, though it is a separate function that does the work.

To view:
Download the project files and open Index.html with your browser.  Click the desired button to show additional content.