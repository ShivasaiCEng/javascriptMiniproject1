const AddEntry=document.getElementById("addEntry");
const Breakfast=document.getElementById("breakfast");
const lunch=document.getElementById("lunch");
const Dinner=document.getElementById("dinner");
const snacks=document.getElementById("snacks");
const exercise=document.getElementById("exercise");
const EntryType=document.getElementById("entry-type");
const Entryvalueinput=document.getElementById("Entryvalueinputs");
Entryvalueinput.style.display="none";
const Breakfastvalues=document.getElementById("Breakfastvalues");
const Lunchvalues=document.getElementById("Lunchvalues");
const Dinnervalues=document.getElementById("Dinnervalues");
const Snacksvalues=document.getElementById("snacksvalues");
const Exercisevalues=document.getElementById("Exercisevalues");



let calories=document.querySelectorAll(".calories");
let budget=document.getElementById("budget")
const caloriecalculated=document.getElementById("calculate")





AddEntry.addEventListener("click", ()=>{

      const newEntry = Entryvalueinput.cloneNode(true);
  newEntry.style.display = "block";

  if (EntryType.value === "breakfast") {
    Breakfastvalues.appendChild(newEntry);
      

  }
  if (EntryType.value === "lunch") {
    Lunchvalues.appendChild(newEntry);

  }
  if (EntryType.value === "dinner") {
    Dinnervalues.appendChild(newEntry);

  }
  if (EntryType.value === "snacks") {
    Snacksvalues.appendChild(newEntry);

  }
  if (EntryType.value === "exercise") {
    Exercisevalues.appendChild(newEntry);

  }
})
let caloriereport=document.getElementById("calculatedcaloriesreport")
caloriereport.style.display="none";

caloriecalculated.addEventListener("click" , ()=>{
    caloriereport.style.display="block";

let totalcalories=0;
let exercisecalorie=0;

document.querySelectorAll(".calories").forEach(input=>{
    totalcalories+= Number(input.value) || 0;

    if(Number(input.value)>budget.value){
        alert("calorie budget exceeded");
        caloriereport.style.display="none";
        
    }
});//normal total calories 

document.querySelectorAll("#Exercisevalues .calories").forEach(input=>{
    exercisecalorie+=Number(input.value)||0;
})

let remaining= budget.value-totalcalories+exercisecalorie;

// if the totalcalories consumed is greater than the budget

if(totalcalories>budget.value){
    alert("The value of the calorie consumed is more reduce it");
}
caloriereport.innerHTML=
`<p>${remaining} calories Surplus</p>
<p>${budget.value} Calories budget</p>
<p>${totalcalories} calories consumed</p>
<p>${exercisecalorie} calories burned</p>
`
})

//clear button logic

let clearbtn=document.getElementById("clear");
clearbtn.addEventListener("click", ()=>{
    budget.value="";
 Breakfastvalues.innerHTML = "";
  Lunchvalues.innerHTML = "";
  Dinnervalues.innerHTML = "";
  Snacksvalues.innerHTML = "";
  Exercisevalues.innerHTML = "";
})


