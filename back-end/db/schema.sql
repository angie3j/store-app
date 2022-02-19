DROP DATABASE IF EXISTS happy_sparky_boutique;
CREATE DATABASE happy_sparky_boutique;

\c happy_sparky_boutique;

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

