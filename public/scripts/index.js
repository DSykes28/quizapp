$(() => {
  window.getQuizzes = {}
  console.log("hello?");
  function showQuiz(quiz) {
    return `
    <div class="grid-item">${quiz.title}</div>
    `
  };

  function get9QuizTitles() {
    $.ajax({
      method: "GET",
      url: "/api/quizzes/random9"
    }).done((response) => {
      const titleContainer = $("#title-container")
      for (const quiz of response.quizzes) {
        const titleItem = showQuiz(quiz);
        titleContainer.append(titleItem);
      }
    });
  };
  get9QuizTitles();
});

