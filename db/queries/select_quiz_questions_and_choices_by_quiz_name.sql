SELECT quiz_names.id, question, choice_a AS A, choice_b AS B, choice_c as C, answer AS D, total_score
FROM quiz_names
JOIN quizzes ON quiz_names.id = title_id
WHERE quiz_names.id = 10;
