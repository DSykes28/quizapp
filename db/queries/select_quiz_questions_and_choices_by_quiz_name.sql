SELECT quiz_names.id, question, choice_a AS (random_id uuid DEFAULT UUID_GENERATE_V4()
), choice_b AS B, choice_c as C, answer AS D, total_score FROM quiz_names
JOIN quizzes ON title_id = user_id
WHERE quiz_names.id = 1;
