const get9Quizzes =  function(db) {
  return db.query(`
  SELECT *
  FROM quiz_names
  WHERE private = false
  ORDER BY random_id
  limit 9;
  `)
  .then(res => res.rows)
}

exports.get9Quizzes = get9Quizzes;
