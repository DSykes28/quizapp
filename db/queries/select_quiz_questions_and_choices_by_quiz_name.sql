<<<<<<< HEAD
<<<<<<< HEAD
SELECT quiz_names.id, question, choice_a AS A, choice_b AS B, choice_c as C, answer AS D, total_score
FROM quiz_names
=======
SELECT quiz_names.id, question, choice_a AS A, choice_b AS B, choice_c as C, answer AS D, total_score FROM quiz_names
>>>>>>> master
=======
SELECT quiz_names.id, question, choice_a AS A, choice_b AS B, choice_c as C, answer AS D, total_score FROM quiz_names
=======
SELECT quiz_names.id, question, choice_a AS A, choice_b AS B, choice_c as C, answer AS D, total_score
FROM quiz_names
>>>>>>> 8322bb9b78f376e1577cd5e3090d2f643000b015
>>>>>>> e9447df24396a5e01a98f1aa20839df30b42c11d
JOIN quizzes ON title_id = user_id
WHERE quiz_names.id = 1;

