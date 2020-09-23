SELECT users.name AS name, title AS quizzes
FROM users
JOIN quiz_names ON user_id = users.id 
WHERE users.id = 3;