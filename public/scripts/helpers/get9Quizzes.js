const getQuizzes =  function(quiz) {
  return pool.query(`
  SELECT title
  FROM quiz_names
  WHERE private = false
  ORDER BY random_id
  limit 9;
  `, [quiz.title])
  .then(res => res.row)
}

exports.getQuizzes = getQuizzes;
