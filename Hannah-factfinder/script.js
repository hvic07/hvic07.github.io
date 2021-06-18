var choose = document.querySelector('#chooseFact');
var factbox = document.querySelector('#factbox');

choose.f1.addEventListener("click", displayFact1);
choose.f2.addEventListener("click", displayFact2);
choose.f3.addEventListener("click", displayFact3);
choose.f4.addEventListener("click", displayFact4);
choose.f5.addEventListener("click", displayFact5);

function displayFact1(){
	factbox.innerHTML = "<p>October 14 is National Dessert Day</p> <img src = 'images/dessert.jpg' alt = 'bowl of macarons'>";
}

function displayFact2(){
	factbox.innerHTML = "<p>Out of the wide variety of cake flavours out there, chocolate is the most popular.</p> <img src = 'images/chocolatecake.jpg' alt = 'chocolate cake'>";
}

function displayFact3(){
	factbox.innerHTML = "<p>Prick holes in the tops of your pies to release trapped steam while it's baking. This helps to prevent the crust from getting soggy:)</p> <img src = 'images/pie.jpg' alt = 'pie'>";
}

function displayFact4(){
	factbox.innerHTML = "<p>Chocolate chips were invented after chocolate chip cookies!</p> <img src = 'images/chocolatechip.jpg' alt = 'chocolate chip cookies'>";
}

function displayFact5(){
	factbox.innerHTML = "<p>The largest cupcake made topped at 1224 pounds, with approximately 2 million calories!</p> <img src = 'images/cupcake.jpg' alt = 'cupcakes'>";
}