
// TODO: Change to dragNdrop on every beverage type. Make dragNdrop available in tablet mode

// Tray functionality

/**
 * Add beverage to tray
 * @param beverage Beverage name
 */
function addToTray(beverage){

    //here we should get the tray-element instead, have to create it in the menu.HTML
    var ul = document.getElementById("tray");
    var li = document.createElement("li");

    li.id = beverage[3];
    li.innerHTML = "<span class=brand>" + beverage[0] + "</span>" + " " + beverage[1] + " " + "<span class=price id='price'>" + beverage[4] + "</span>";
    li.className = "trayItem";
    li.addEventListener('click', () => {removeFromTray(li);subAmount(beverage[4])});
    //ul.value = "";
    ul.appendChild(li);

};

/**
 * Remove beverage from tray
 * @param beverage Beverage name
 */
function removeFromTray(beverage){
    var ul = document.getElementById("tray");
    ul.removeChild(beverage);
}

/**
 * Add up price of beverage
 * @param beverage Beverage name
 */

// TODO: Merge addAmount together

function addAmount(beverage){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(previousAmount);
    var totalAmount = +previousAmount + +beverage[4];
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;
    console.log(totalAmount);

}

function addAmount2(price){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(previousAmount);
    var totalAmount = +previousAmount + +price;
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;
    console.log(totalAmount);

}

/**
 * Substract price from removed beverage
 * @param beverage beverage
 */

// TODO: Merge subAmount together

function subAmount(beverage){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(beverage);
    console.log(previousAmount);
    var totalAmount = +previousAmount - +beverage;
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;
    console.log(totalAmount);

}


function subAmount2(price){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(price);
    console.log(previousAmount);
    var totalAmount = +previousAmount - +price;
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;
    console.log(totalAmount);

}

/** These functions are used for Drag n Drop in the menu, this will replace the previous add-function when it's done**/

// TODO: Drag n Drop working in tablet mode, right now only working in browser mode

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("Beverage", event.target.id);
}


function drop(event){
    console.log(event);

    event.preventDefault();
    var data = event.dataTransfer.getData("Beverage");
    console.log(data);

    var price = document.getElementById("price").innerHTML;
    console.log(price);
    addAmount2(price);

    var newTrayItem = document.getElementById(data);
    newTrayItem.className = "trayItem";
    newTrayItem.addEventListener('click', () => {removeFromTray(newTrayItem);subAmount2(price);});
    console.log(newTrayItem);

    tray = document.getElementById("tray");
    tray.appendChild(newTrayItem);

}

