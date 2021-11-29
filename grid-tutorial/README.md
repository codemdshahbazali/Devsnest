grid
grid-template-columns
repeat(times, value)
grid-template-rows
grid-auto-rows, minmax(150px, auto)
grid-row-gap
grid-column-gap
grid-gap
grid-template-areas (helps in laying out the grid items) <-> grid-area

alternate for layout
++++++++++++++++++++++++++++++++
grid-column - shortcut (1/-1), can use "span with number of row/column"
grid-column-start (takes grid gap as on column)
grid-column-end (takes grid gap as on column)
using -1 in grid-column-end helps span till the end
grid-row-start (same as column)
grid-row-end
grid-row - we can use span as well divide symbol together

Aligning grid-container and grid-item inside the container
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
align-items and justify-items - for aligning item inside their rows (by default it's set to stretch)
align-content(vertical-axis) and justify-content(horizontal-axis) - for container

for individual grid items (these over rides align item and justify item)
align-self - start
justify-self - center

#######################################
Flex box
