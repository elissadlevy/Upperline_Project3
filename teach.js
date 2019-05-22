console.log("Script is running for teachthestudent.html!")

//define consts
const studentImage = document.querySelector("#studentImage")
const easyQuestion = document.querySelector("#easyQuestion")
const hardQuestion = document.querySelector("#hardQuestion")
const praiseEffort = document.querySelector("#praiseEffort")
const status = document.querySelector("#status")

easyQuestion.addEventListener('click', (e) =>{
  status.innerHTML = `You asked an easy question!`
  studentImage.innerHTML = `<img src="img/student_distracted.jpg" height="300" width="auto"/>`
})

hardQuestion.addEventListener('click', (e) =>{
  status.innerHTML = `You asked a hard question!`
  studentImage.innerHTML = `<img src="img/student_confused.jpg" height="300" width="auto"/>`
})

praiseEffort.addEventListener('click', (e) =>{
  status.innerHTML = `You praised my effort!`
  studentImage.innerHTML = `<img src="img/student_unchallenged.jpg" height="300" width="auto"/>`
})