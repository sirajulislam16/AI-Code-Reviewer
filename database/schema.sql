CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 email TEXT UNIQUE,
 password TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 user_id INT,
 code TEXT,
 bugs JSON,
 security JSON,
 optimization JSON,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);