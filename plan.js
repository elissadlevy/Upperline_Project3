console.log("Script is running for planthelesson.html!")

//define consts
const lessonPlan = document.querySelector("#lessonPlan")
const learningTarget = document.querySelector("#learningTarget")
const addStandards = document.querySelector("#addStandards")
const addScaffolding = document.querySelector("#addScaffolding")
const differentiate = document.querySelector("#differentiate")
const status = document.querySelector("#status")

learningTarget.addEventListener('click', (e) =>{
  status.innerHTML = `You added a learning target!`
  lessonPlan.innerHTML = `<img src="img/lesson_blank.jpg"/>`
})

addStandards.addEventListener('click', (e) =>{
  status.innerHTML = `You added standards!`
  lessonPlan.innerHTML = `<img src="img/lesson_blank.jpg"/>`
})

addScaffolding.addEventListener('click', (e) =>{
  status.innerHTML = `You added scaffolding!`
  lessonPlan.innerHTML = `<img src="img/lesson_blank.jpg"/>`
})

differentiate.addEventListener('click', (e) =>{
  status.innerHTML = `You differentiated!`
  lessonPlan.innerHTML = `<img src="img/lesson_blank.jpg"/>`
})
