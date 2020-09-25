$( document ).ready(function() {
  console.log( "ready");
  $(".quizz-form").on("submit", (evt) => {
   evt.preventDefault()
  //  $("fieldset")[0].datase
  let tally = 0;
  // document.querySelector('input[name="group14"]:checked').parentElement.textContent
  $("fieldset").each((i, elem) => {
    console.log(i, elem);
    let answer = document.querySelector(`input[name="${elem.id}"]:checked`).parentElement.textContent;
    if (elem.dataset.answer === answer) {
     tally++;
    }
  })
  console.log(tally);
  console.log($("fieldset").length);
  //google window location href redirect
  })
});
