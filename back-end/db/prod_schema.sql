-- DROP DATABASE IF EXISTS d9f0n5acms01tu;
-- CREATE DATABASE d9f0n5acms01tu;

\c d9f0n5acms01tu

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    reviews TEXT,
    image TEXT,
    description TEXT, 
    price TEXT,
    size TEXT, 
    color TEXT,
    featured BOOLEAN DEFAULT false
);
