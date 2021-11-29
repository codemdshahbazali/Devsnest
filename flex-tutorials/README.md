flex-box container
display: flex;
-main-axes - is along the content layout
justify-content moves the elements around the main axes
-cross-axes - is perpendicular to the content layout
align-item - moves the elements along cross axes

align-content -> used when flex-item is spread into multiple lines. (properties are similar to above)

flex-wrap:wrap;

by default flex box container has
-flex-direction as row
-align-item: strech

container -> laying out the element and positioning the element

flexbox-item
flex-shrink: 0 -> prevents item from shrinking when we re-size the browser
flex-shrink: value -> shrinks the elements accordingly
flx-gorw: 1 -> makes the item take all the available space

flex-grow takes all the left over space and divide it over flex-grows propotionally (it considers the initial width)

to override the inital width - we can use flex-basis proeprty
flex-basis: 0 -> makes the initial length to be zero and the applies flex grow

align-self is applied to individual flex items and it overrides the align-content property for that item

order property - apply to all the items - helps to change the order of the items visually but html won;t changed. not advised to use (html flow is messed/reader is messed)

flex - short cut for flex-grow, flex-shrink and flex-basis
flex- 1 0 0px
flex - 1 --- it can be used like this too

CSS Position
++++++++++++++++++++++
postions:
-static(default for all the elements, flows the document flow, can't change the position)

-relative(acts exactly like static positioning(follows the document flow), but allows us to change the position of the element using top, bottom, left and right). When we apply top, bottom, right and left, it takes the element out of the doc flow, relative to where it should be
We should not use it to change position as it takes element out of the document flow hence making things difficult

-absolute - document ignores the element when we apply absolute to it. It is completely removed from the document flow.
It aboslutely positions an element with reference to some parent container. If it doesn't find a parent container having position other than static then it positions itself with respect to the html container. We normally use position relative to relatively position element to it. This is not fixed to the position like "fixed".

-fixed - it positions itself relative to html element. It is fixed when we scroll the page.
-sticky - combination of relative + fixed. Initally it will remain relative, but when we scroll and this element moves to the top then it sticks to the top of the page

CSS display
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
display: block -> takes up the entire width and no other element can come next to it (divs)
display: inline -> takes up minimum amt of space possible(span). Setting width and height of the element is not possible
display: inline-block -> takes up minimum amt of space possible but we can set the width and height of the element (img)
display: none -> completely removes the element from the html visually

display: flex
display: grid
