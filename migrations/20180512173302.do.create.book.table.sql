CREATE TABLE books (
  id varchar CONSTRAINT book_id PRIMARY KEY,
  title varchar NOT NULL,
  author varchar NOT NULL,
  rating numeric NOT NULL DEFAULT 0,
  rating_count integer NOT NULL DEFAULT 0,
  img varchar
);
