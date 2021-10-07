# Reddis

    It is a cache for backend
    To have quick access to important data we use redis
    Fast retrival of data
    redis resides inside the RAM


# Installation

    https://gist.github.com/Audarya07/01a78ec5fb5bb86231f4a0308806c4f3

Redis Installation

1. For Windows

   - Enable WSL from "Turn Windows features on or off settings"
   - Restart the machine
   - Install Ubuntu20.04 from Windows Store
   - Open Ubuntu and setup name and password
   - Run the following commands:
     > sudo apt-get update
     > sudo apt-get upgrade
     > sudo apt-get install redis-server
     > sudo service redis-server restart
     > redis-cli

2. For Linux
   - Run the commands:
     > sudo apt-get install redis-server
     > sudo service redis-server restart
     > redis-cli
3. For MAC
   - Run the command
     > brew install redis

## Execution

1. redis-server
2. redis-cli
3. default port
   127.0.0.1:6379

## Defination
Redis has key value pair in which value is always a string. It can be understood like it's not a database. It stores a huge JSON

## Commands
    To set value we write -> SET keyName Value
    To get value we write -> GET keyName
    To delete -> DEL keyName
    To check key existance -> EXISTS keyName
        If output is 1 then it exists and if output is 0 then key doesn't exist
    list of all keys -> KEYS *
    To delete all keys -> FLUSHALL
    To know how long will the key live -> ttl keyName
    We need to set expiration of the KEY to see useage of "ttl" command -> expire keyName timeInSeconds
    We set key with an expiration time
    To set expire at the time of key creation -> setex keyName TimeInSeconds Value 
    To insert at beggining in an array -> lpush ArrayName value
    To view an array -> LRANGE arrayName startIndex -1
    Can't use GET with array
    To push at the end of an array -> rpush arrayName value
    to delete element from array from left side -> lpop arrayName
    Data structure SET in Redis -> SADD hobbies "Weight ligting"
    We can't add duplicates inside a SET
    To view set -> SMEMBERS setName
    To create an object -> HSET objectName keyName keyValue
    To view a property -> HGET objectName ObjectKey
    To view all property -> HGETALL objectName
    To Delete object's property -> HDEL objectName propertyName
    To Delete entire object -> HGETALL objectName
    To check exits -> HEXIST objectName PropertyName

# POSTGRES

It is a relational database. 

## Commands
    use semicolon(;) at the end of each command
    To enter postgres we will write -> psql -U postgres
    To enter with password -> psql -U postgres -p password
    -U stands for userName
    To create user -> CREATE USER shahbaz WITH PASSWORD 'password'
    POSTGRES is case sensitive in some versions
    To create database -> CREATE DATABASE devs
    To give permission to user for the database -> GRANT ALL PRIVILAGES ON DATABASE databaseName to userName
    To give specific permission ->
    GRANT SELECT/UPDATE/DELETE PRIVILAGE ON DATABASE databaseName to userName
    to connect to a database -> \c
    to view all database -> \l
    To delete database -> DROP databaseName
    To create table -> CREATE TABLE tableName(
        ID INT NOT NULL,
        NAME CHAR[50],
        AGE INT,
        ADDRESS TEXT
    );
    TO VIEW DATABASE -> \d
    To view table with key types -> \d tableName
    to exit postgres -> \q