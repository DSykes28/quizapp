-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS quizzes CASCADE;
DROP TABLE IF EXISTS results CASCADE;
DROP TABLE IF EXISTS quiz_names CASCADE;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE quiz_names (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title VARCHAR(255) NOT NULL,
  private BOOLEAN NOT NULL DEFAULT FALSE,
  total_score INTEGER,
  random_id uuid DEFAULT UUID_GENERATE_V4()

);

CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY,
  title_id INTEGER REFERENCES quiz_names(id) ON DELETE CASCADE NOT NULL,
  question TEXT NOT NULL,
  choice_a VARCHAR(255) NOT NULL,
  choice_b VARCHAR(255) NOT NULL,
  choice_c VARCHAR(255) NOT NULL,
  answer VARCHAR(255) NOT NULL
);

CREATE TABLE results (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE NOT NULL,
  score INTEGER
  );
