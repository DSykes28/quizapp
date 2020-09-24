$(() => {

  const $quiz = $(`
    <div class="column">
      <div class="info">
        <h2>${Quizz-Title}</h2>
        <p>number of quistions: ${3}</p>
      </div>
      <div id="checkbox">
        <input type="checkbox">
        <label>private</label>
      </div>
    </div>
  `);
  window.$quiz = $quiz;
  window.quiz = {};
}
