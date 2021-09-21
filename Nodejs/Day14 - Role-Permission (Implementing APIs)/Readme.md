THA: Connect frontend with APIs

.env file
We keep our environment variables inside .env file (It does the same work that we do in windows for setting env variables)
we keep .env file in gitignore as it will contain secret info (mongoDB url, database password, etc)
we keep things inside .env file which will not change for long time
to use .env file, we use a module called dotenv(https://www.npmjs.com/package/dotenv)
We keep things that changes always inside a json file inside config like aws url

https://github.com/rachit1994/devsnest-ecommerce

https://stackoverflow.com/questions/42857551/could-not-connect-to-redis-at-127-0-0-16379-connection-refused-with-homebrew
