const getQuizzes =  function(quiz) {
  return pool.query(`
  SELECT title
  FROM quiz_names
  WHERE private = false
  ORDER BY random_id
  limit 9
    
  VALUES ($1)
  RETURNING *;
  `, [quiz_names.title])
  .then(res => res.row)
}

exports.getQuizzes = getQuizzes;