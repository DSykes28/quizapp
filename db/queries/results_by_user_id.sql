SELECT name, title, score, total_score 
FROM results
JOIN users ON users.id = user_id 
JOIN quiz_names ON quiz_names.id = results.quiz_id
WHERE users.id = 1;

