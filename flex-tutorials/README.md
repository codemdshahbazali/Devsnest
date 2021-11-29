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
