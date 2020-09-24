SELECT quiz_names.id, question, total_score FROM quiz_names
JOIN quizzes ON title_id = user_id
WHERE quiz_names.id = 1;