const questions = document.querySelectorAll(".faq h3");

questions.forEach(function(question){
  question.addEventListener("click", function(){
    const answer = this.nextElementSibling;

    if(answer.style.display === "block"){
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

const stars = document.querySelectorAll(".stars span");
const result = document.getElementById("rating-result");

stars.forEach(star => {
  star.addEventListener("click", function(){

    let rating = this.getAttribute("data-value");

    result.textContent = "You rated this recipe " + rating + " ⭐";

  });
});