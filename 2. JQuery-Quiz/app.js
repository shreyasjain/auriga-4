var slideIndex = 1;
showSlides(slideIndex);
const answers = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d", "a"]
let myAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

console.log(localStorage)
// Next/previous controls
function plusSlides(n, temp) {
  let options = document.getElementsByClassName(`answer-${temp}`)
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked == true) {
      // localStorage.setItem(temp,options[i].value)
      if (options[i].value === answers[temp]) {
        myAnswers[temp] = 1
      } else {
        myAnswers[temp] = 0
      }
    }
  }
  showSlides(slideIndex += n);
  // localStorage.setItem("active-slide",slideIndex+=n)
  // localStorage.setItem("score",computeResult()  )
}


const computeResult = () => {
  let sum = 0
  for (let i = 0; i < myAnswers.length; i++) {
    sum += myAnswers[i]
  }
  console.log(sum)
  return sum
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  let w = slideIndex*100/25
  document.getElementById("progress-bar").style.width=`${w}%`
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}