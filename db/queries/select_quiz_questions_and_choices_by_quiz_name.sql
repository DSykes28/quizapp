<<<<<<< HEAD
SELECT quiz_names.id, question, choice_a AS A, choice_b AS B, choice_c as C, answer AS D, total_score
FROM quiz_names
=======
SELECT quiz_names.id, question, choice_a AS A, choice_b AS B, choice_c as C, answer AS D, total_score FROM quiz_names
>>>>>>> master
JOIN quizzes ON title_id = user_id
WHERE quiz_names.id = 1;

