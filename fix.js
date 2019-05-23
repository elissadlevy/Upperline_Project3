console.log("Script is running for fixthecopier.html!")

//define consts
const copierImage = document.querySelector("#copierImage")
console.log(copierImage)
const addPaper = document.querySelector("#addPaper")
const changeToner = document.querySelector("#changeToner")
const callSupport = document.querySelector("#callSupport")
const kickCopier = document.querySelector("#kickCopier")
const status = document.querySelector("#status")

const paperNeeded = 5;
const maxCalls = 5;
const kicksNeeded = 6;

// Count the number of times each button has been pressed.  Start each of them at 0.
let countAddPaper = 0;
let countChangeToner = 0;
let countCallSupport = 0;
let countKickCopier = 0;

addPaper.addEventListener('click', (e) =>{
  console.log(`Add paper button clicked.`);
  countAddPaper += 1;
  copierImage.innerHTML = `<img src="img/copier_normal.jpg"/>`;
  if (countAddPaper == 1) {
  status.innerHTML = `You added one ream of paper, but it's not enough!`}
  else if (countAddPaper < paperNeeded) {
      status.innerHTML = `You added ${countAddPaper} reams of paper, but it's not enough!`  }
  else if (countAddPaper == paperNeeded) {
    status.innerHTML = `You have added enough paper now.`}
  else if (countKickCopier < kicksNeeded) { status.innerHTML = `Paper trays are full.  Maybe you haven't kicked the copier enough.`}
  else {}
});

changeToner.addEventListener('click', (e) =>{
  console.log("Change toner button clicked.");
  countChangeToner += 1;
  copierImage.innerHTML = `<img src="img/copier_normal.jpg"/>`;
  if (countChangeToner == 1) {
  status.innerHTML = `Good job changing the toner!`}
  else { status.innerHTML = `You already changed the toner!  Now you're just wasting money.`;
  }
});

callSupport.addEventListener('click', (e) => {
  console.log("Call support button clicked.");
  countCallSupport += 1;
  status.innerHTML = `You tried calling tech support, eh?`
  if (countCallSupport < maxCalls) {
    const randomNumber1 = Math.random();
    console.log(randomNumber1);
      if (randomNumber1 < 0.67) {
        const randomNumber2 = Math.random();
        console.log(randomNumber2);
        if (randomNumber2 < 0.5) {
          copierImage.innerHTML = `<img src="img/copier_techsupport1.jpg"/>`;
        }
        else {
          copierImage.innerHTML = `<img src="img/copier_techsupport2.jpg"/>`;
        };
      }
      else {
        copierImage.innerHTML = `<img src="img/copier_techsupport3.jpg"/>`
      };
  }
  else {
    copierImage.innerHTML = `<img src="img/copier_nomorecalls.jpg"/>`
  };
})

kickCopier.addEventListener('click', (e) =>{
  console.log("Kick copier button clicked.");
  copierImage.innerHTML = `<img src="img/copier_normal.jpg"/>`
  if (countKickCopier < kicksNeeded) { 
      if (Math.random() < 0.5) { status.innerHTML = `That was a wimpy kick and did not count.`}
      else {
      status.innerHTML = `Good strong kick, but not good enough!`;
      countKickCopier +=1;
      }
  }
  else {status.innerHTML = `You've kicked the copier enough times now.`  }
});
