SELECT users.name AS name, title AS quizzes
FROM users
JOIN quiz_names ON user_id = users.id 
<<<<<<< HEAD
WHERE users.id = 3 AND private = FALSE;
=======
WHERE users.id = 3;
>>>>>>> master
