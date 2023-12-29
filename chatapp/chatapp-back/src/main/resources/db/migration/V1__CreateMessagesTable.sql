CREATE TABLE Messages (
    id SERIAL PRIMARY KEY,
    sender VARCHAR(100),
    content TEXT,
    photo BYTEA,
    video BYTEA,
    sent_at TIMESTAMP
);
