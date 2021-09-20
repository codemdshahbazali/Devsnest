Secure, Performant, Problems (Edge cases)
Planning 80% of the time
Traffic - how much traffic i’m expecting
Number of Active Users - 1 lakh toh node react 
Budget - WIX, wordpress
graphQL
Based on requirement select the technology 
Options call -> to check the server is up and running . This is not the case in graphQL
Try to do minimum api call
Pagination to limit data 
React virtualization -> not showing too much data at once
Searching for already implemented solution 
Encryption to secure data

# Planning the project

## Public routed
GET ALL PRODUCTS - /api/products - GET
GET A SINGLE PRODUCT - /api/products/:pid - GET

PAGING
/api/products&page=1    - NUMBER = 12  

LOGIN - /api/login - POST - <token>
SIGNUP - /api/signup - POST
GET A SPECIFIC CATEGORY - /api/products/category/:categoryId - GET 
OAUTH - /api/login/oauth/

## Private routes
//Normal User(BUYER)
UPDATE A USER - /api/users/:userId - PUT
VIEW MYSELF - /api/users/:userId - GET

//SELLER
ADD A PRODUCT - /api/products/add/:userId - POST
UPDATE A PRODUCT - /api/products/:productId/update/:userId - PUT 
DELETE A PRODUCT - /api/products/:productId/delete/:userId - DELETE
GET ALL PRODUCTS BY SELLER ID - /api/products/seller/:sellerId - GET(OPTIONAL)

//BOTH
ADD TO CART - /api/users/:userId/cart - POST
GET CART - /api/users/:userId/cart - GET
UPDATE CART - /api/users/:userId/cart - PUT
ORDER - /api/users/:userId/order - POST - CART WILL BE EMPTY - EMAIL(nodeMailer) 
GET ALL ORDERS - /api/users/:userId/order - GET
GET A SPECIFIC ORDER - /api/users/:userId/order/:orderId - GET
CHECKOUT(PAYMENT GATEWAY) - /api/users/:userId/order/payment
SUCCESS - /api/payment/success
FAIL - /api/payment/failure
