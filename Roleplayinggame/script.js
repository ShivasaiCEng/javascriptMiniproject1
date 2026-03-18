
// let villagepart = document.getElementById("village");
// let mainstorypart=document.getElementById("mainstory");
// let Foreststorypart=document.getElementById("forest");
// let dragonstorypart=document.getElementById("dragon");
// let playername="";
// const NxtBtn=document.getElementById("nextbtn");
// NxtBtn.style.display="none";
// let talkmerchantafterforest=document.getElementById("Talktomerchantafterforesttask");

// let villagebtn=document.getElementById("Gotovillage");
// villagebtn.addEventListener("click",function(){
// mainstorypart.style.display="none";
// villagepart.style.display="block";
// Foreststorypart.style.display="none";
// dragonstorypart.style.display="none";
// NxtBtn.style.display="none";
// talkmerchantafterforest.style.display="none";

// });


// let Forestbtn=document.getElementById("enterforest");
// Forestbtn.addEventListener("click", function(){
// mainstorypart.style.display="none";
// villagepart.style.display="none";
// Foreststorypart.style.display="block";
// dragonstorypart.style.display="none";
// NxtBtn.style.display="block";

// });

// let Dragonbtn=document.getElementById("fightdragon");
// Dragonbtn.addEventListener("click",function(){
// mainstorypart.style.display="none";
// villagepart.style.display="none";
// Foreststorypart.style.display="none";
// dragonstorypart.style.display="block";
// NxtBtn.style.display="block";

// })

// let submitbtn=document.getElementById("submitName");

//     let greeting=document.getElementById("merchantGreeting");  // <p> <p>
// submitbtn.addEventListener("click",function(){
//     let name=document.getElementById("playername").value;
//     playername=name;
//   greeting.innerText="Merchant: Nice to meet you," + name + " welcome";
//     NxtBtn.style.display="block";
// })

// //merchant talk part
// // let Merchanttalkbtn=document.getElementById("talktomerchant");
//   let merchantd1=document.getElementById("merchantd1");
// //  merchantd1.style.display="none";
// // Merchanttalkbtn.addEventListener("click",function(){
// // merchantd1.style.display="block";
// // })

// // let merchantd2=document.getElementById("merchantd2");
// // merchantd2.style.display="none";
// // let nextbtn=document.getElementById("nextbtn");

// // let merchantd3=document.getElementById("merchantd3");
// // merchantd3.style.display="none";
// // nextbtn.addEventListener("click", function(){
// //  merchantd2.style.display="block";
// // })

// const TalkToMerchant=document.getElementById("talktomerchant");

// const dialogueBox=document.getElementById("merchantDialogue");
// const MerchantTaskDecision=document.getElementById("MerchantTaskDecision");
// let merchanttaskaccept=document.getElementById("merchanttaskaccept");
// let merchanttaskreject=document.getElementById("merchanttaskreject");

// TalkToMerchant.addEventListener("click",()=>{
// merchantd1.style.display="block";
// greeting.style.display="block";
// i=0;
// dialogueBox.innerText="";
// NxtBtn.style.display="block"; 
// })


//  let index=0;

// NxtBtn.addEventListener("click", ()=>{
//  const dialogues=[
//   "Merchant: What do you want",
//   `${playername}:supplies!`,  //playername.value is invalid as it is not an input element it is a string so it read it as undefined.
//   "Merchant: 100XP or Bring me few natural extracts from the forest"
// ]

//   if(index<dialogues.length){
//     dialogueBox.innerText=dialogues[index];
//     index++;
//   }

//   if(index===dialogues.length){
//     MerchantTaskDecision.style.display="block";
//      NxtBtn.style.display="none";
//   }
// });

// merchanttaskaccept.addEventListener("click",()=>{
//   dialogueBox.innerText="Merchant:Okay good! remember the forest is too dark";
//   villagepart.style.display="none";
//   Foreststorypart.style.display="block";
// })
// let TalkToWizard=document.getElementById("Talktowizard");
// let Wizdialoguebox=document.getElementById("WizDialogueBox");
// let ForestDialogues=[];
// let storystage="wizard";
// let i=0;
// TalkToWizard.addEventListener("click", ()=>{
  
  
//   ForestDialogues=[
//   "Wiz:Hey what do you want?",
//   `${playername}: I am searching for natural extracts for the merchant in the village`,
//   "wiz:Don't pass thhrough this forest many have lost their lives for that precious natural extract",
//   `${playername}: I need to save the village from dragon`,
//   "wiz: Are you the warrior from the cathedral of the great Shindro Ochinawa",
//   `${playername}: Yes but how do you know?`,
// "wiz: Please forgive me take this gem it will guide you to the place you are going.",
// "You got the natural extracts sell them and get your sword!"
// ];
// i=0;
// Wizdialoguebox.innerText = ForestDialogues[i];
// NxtBtn.style.display="block";
// })


// NxtBtn.addEventListener("click", ()=>{
//   if(ForestDialogues.length === 0) return; //the wizard dialogue stops if there are no other dialogues in the wizarddialoguebox which will then help us in implementing both merchant and wizard dialogue separately.
//   NxtBtn.style.display="block";
//   if(i < ForestDialogues.length - 1){
//     i++;
//    if(storystage === "wizard"){
//         Wizdialoguebox.innerText = ForestDialogues[i];
//     } else {
//         merchantafterforestdbox.innerText = ForestDialogues[i];
//     }
// }

// else{
//   if(storystage==="wizard"){
//     storystage="merchant";
//     AfterDarkForestArc();
//     return;
//   }

//   if(storystage==="merchant"){
//  Foreststorypart.style.display="none";
//   villagepart.style.display = "block";
  
// i=0;
// index=0;
//     //this was done to reset the prev dialogues and  make a new convo session.
//     ForestDialogues=[];
//     Wizdialoguebox.innerText="";
// dialogueBox.innerText="";

//  merchantafterforestdbox.innerText = "";
//   greeting.innerText = "";

//  talkmerchantafterforest.style.display = "none";
//  MerchantTaskDecision.style.display = "none";
//  merchantd1.style.display="none";
//  NxtBtn.style.display="none";
// merchantafterforestdbox.style.display = "none";
// }}
// });

// merchanttaskreject.addEventListener("click",()=>{
//   dialogueBox.innerText="Guide:It's better you help him.";
// })
// let merchantafterforestdbox=document.getElementById("merchantafterforestdbox");


// function AfterDarkForestArc(params) {
//  Foreststorypart.style.display = "none";
// villagepart.style.display = "block";
// NxtBtn.style.display="block";
// merchantd1.style.display="none";
// dialogueBox.innerText="";
// greeting.style.display = "none";
// dialogueBox.style.display = "none";
// MerchantTaskDecision.style.display = "none";
// Wizdialoguebox.innerText="";
// merchantafterforestdbox.style.display="none";
// merchantafterforestdbox.innerText="";
// //after dark forest part
// talkmerchantafterforest.style.display="block";
// ForestDialogues=[
// "Merchant:there you go!",
// `${playername}: here are the natural extracts`,
// "Merchant: I know you are from the  cathedral of the great Shindro Ochinawa. These natural extracts are for you health.",
// `${playername}: Thanks for the sword and these extracts I will now complete my duty`,
// "Merchant: Remember the faster you are the higher the chances of killing the dragon."
// ]
//   merchantafterforestdbox.style.display = "none";
// };

// talkmerchantafterforest.addEventListener("click",()=>{
//    i = 0;
//   merchantafterforestdbox.style.display = "block";
//   merchantafterforestdbox.innerText = ForestDialogues[i];
//   NxtBtn.style.display = "block";
// })



//Modified code

//scenes
const scenes={
  village: document.getElementById("village"),
  forest: document.getElementById("forest"),
  dragon: document.getElementById("dragon"),
  main: document.getElementById("mainstory")
}

const nextBtn = document.getElementById("nextbtn");

//dialogue boxes access
const wizBox = document.getElementById("WizDialogueBox");
const merchantBox = document.getElementById("merchantDialogue");
const merchantAfterBox = document.getElementById("merchantafterforestdbox");

//variables initialization
let dialogues = [];
let i = 0;
let currentBox = null;
let currentScene="";
let playername = "";
let forestCompleted = false;
let xp=0;
let gold=0;


let merchantd1=document.getElementById("merchantd1");
let talkAfterForest=document.getElementById("Talktomerchantafterforesttask");
let talkMerchantBtn=document.getElementById("talktomerchant");
const xpDisplay = document.getElementById("xp");
const golddisplay=document.getElementById("goldvalue");
talkAfterForest.style.display="none";


function showScene(name){
  Object.values(scenes).forEach(s=>s.style.display="none");
  scenes[name].style.display="block";
}

function addgold(amount){
gold+=amount;
golddisplay.innerText=gold;
}
function addXP(amount){
  xp += amount;
  xpDisplay.innerText = xp;
}




let submit=document.getElementById("submitName");
  submit.addEventListener("click",()=>{
 playername=document.getElementById("playername").value;
 startDialogue([
    "Merchant: What do you want",
    `${playername}: supplies!`,
    "Merchant: Bring me natural extracts from the forest"
  ], merchantBox,"merchant");
  })


function startDialogue(list,box,scene){
  dialogues=list;//making the list as global variable as other functions need it's access.
  i=0;
  currentBox=box;//making the list as global variable as other functions need it's access.
currentScene=scene;
  box.innerText=dialogues[i];
nextBtn.style.display="block";
}

nextBtn.addEventListener("click",()=>{
  if(i<dialogues.length-1){
i++;
currentBox.innerText=dialogues[i];
  } else{ // after the dialogues ends this part continues
    nextBtn.style.display="none";

    if(currentScene==="merchant"){ //if the currentscene is merchant then it was the dialogues that ended
      showScene("forest");}
      else if(currentScene==="wizard"){
        forestCompleted=true;
    showScene("village");

    wizBox.innerText="";
    merchantBox.innerText="";
merchantd1.style.display="none";
document.getElementById("villageIntro").style.display="none";
    talkMerchantBtn.style.display="none";
    talkAfterForest.style.display="block";
      }
      else if(currentScene==="merchantAfterForest"){
        addXP(150);
        addgold(500);
showScene("dragon");
      }
  }
});
  

document.getElementById("talktomerchant").onclick = ()=>{
merchantd1.style.display = "block";};

const talkWizardBtn = document.getElementById("Talktowizard");

talkWizardBtn.addEventListener("click", ()=>{

  startDialogue([
    "Wizard: Hey what do you want?",
    `${playername}: I need extracts`,
    "Wizard: Take this gem",
    "You obtained the extracts!"
  ], wizBox,"wizard");

});

document.getElementById("Talktomerchantafterforesttask").onclick = ()=>{
  startDialogue([
    "Merchant: There you go!",
    `${playername}: Here are the extracts`,
    "Merchant: Use them well",
    "Now go defeat the dragon!"
  ], merchantAfterBox,"merchantAfterForest");
};

document.getElementById("Gotovillage").onclick = ()=> showScene("village");
document.getElementById("enterforest").onclick = ()=> showScene("forest");
document.getElementById("fightdragon").onclick = ()=> showScene("dragon");