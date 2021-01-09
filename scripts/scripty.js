/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
create view and quiz on drinks for my job
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

//selectors
const drinkBtn = document.querySelector('#drink');
const drinkTitle = document.querySelector('#drinkTitle');
const shots = document.querySelector('#shots');
const pumps = document.querySelector('#pumps');
const scoops = document.querySelector('#scoops');
const redbulls = document.querySelector('#redbulls');
const shotsNum = document.querySelector('#shotsNum');
const pumpsNum = document.querySelector('#pumpsNum');
const scoopsNum = document.querySelector('#scoopsNum');
const redbullsNum = document.querySelector('#redbullsNum');
const newDrinkBtn = document.querySelector('#newDrink');
const checkerBtn = document.querySelector('#checkerBtn');
const checkedShots = document.querySelector('#checkedShots');
const checkedPumps = document.querySelector('#checkedPumps');
const checkedScoops = document.querySelector('#checkedScoops');
const checkedRedbulls = document.querySelector('#checkedRedbulls');
const answerBtn = document.querySelector('#answer');

//classes and functions
class beverage {
  constructor(name, type, size) {
    this._name = name;
    this._type = type;
    this._size = size;
  }
  get name() { return this._name; }
  get type() { return this._type; }
  get size() { return this._size; }
  set name(x) { return this._name = x; }
  set type(x) { return this._type = x; }
  set size(x) { return this._size = x; }
  shotDeterminer() {
    toggleDisplay('#shots');
    let name = `${this.size} ${this.type} ${this.name}`;
    let shots;
    switch (name) {
      case 'Small Hot Latte':
      case 'Small Hot Cappuccino':
      case 'Small Hot Mocha':
      case 'Small Iced Latte':
      case 'Small Iced Mocha':
        shots = 2;
        break;
      case 'Medium Hot Latte':
      case 'Medium Hot Cappuccino':
      case 'Medium Hot Mocha':
      case 'Medium Iced Latte':
      case 'Medium Iced Mocha':
        shots = 2;
        break;
      case 'Large Iced Latte':
      case 'Large Iced Mocha':
        shots = 3;
      case 'Large Hot Latte':
      case 'Large Hot Cappuccino':
      case 'Large Hot Mocha':
        shots = 4;
        break;
      case 'Small Frozen Latte':
      case 'Small Frozen Mocha':
      case ' Hot Avalanch':
        shots = 6;
        break;
      case 'Medium Frozen Latte':
      case 'Medium Frozen Mocha':
        shots = 8;
        break;
      case 'Large Frozen Latte':
      case 'Large Frozen Mocha':
        shots = 10;
        break;
      case ' Iced Avalanch':
      case ' Frozen Avalanch':
        shots = 14;
        break;
    }
    return shotsNum.innerHTML = shots;
  }
  pumpDeterminer = () => {
    toggleDisplay('#pumps');
    let name = `${this.size} ${this.type} ${this.name}`;
    let pumps;
    switch (name) {
      case 'Small Hot Latte':
      case 'Small Hot Cappuccino':
      case 'Small Iced Latte':
        pumps = 2;
        break;
      case 'Medium Hot Latte':
      case 'Medium Hot Cappuccino':
      case 'Medium Iced Latte':
      case 'Small Frozen Latte':
      case ' Hot Avalanch':
      case ' Iced Avalanch':
      case ' Frozen Avalanch':
      case 'Small Hot Redbull':
        pumps = 3;
        break;
      case 'Large Hot Latte':
      case 'Large Hot Cappuccino':
      case 'Large Iced Latte':
      case 'Medium Frozen Latte':
      case 'Small Iced Redbull':
        pumps = 4;
        break;
      case 'Large Frozen Latte':
        pumps = 5;
        break;
      case 'Large Hot Redbull':
        pumps = 6;
        break;
      case 'Large Iced Redbull':
        pumps = 8;
        break;
    }
    return pumpsNum.innerHTML = pumps;
  }
  scoopDeterminer = () => {
    toggleDisplay('#scoops');
    let name = `${this.size} ${this.type} ${this.name}`;
    let scoops;
    switch (name) {
      case 'Small Hot Mocha':
      case 'Small Iced Mocha':
        scoops = 2;
        break;
      case 'Medium Hot Mocha':
      case 'Medium Iced Mocha':
      case 'Small Frozen Mocha':
        scoops = 2.5;
        break;
      case 'Large Hot Mocha':
      case 'Large Iced Mocha':
      case 'Medium Frozen Mocha':
      case 'Small Hot Chai':
      case 'Small Hot Matcha':
        scoops = 3;
        break;
      case 'Large Frozen Mocha':
        scoops = 3.5;
        break;
      case 'Medium Hot Chai':
      case 'Medium Hot Matcha':
        scoops = 4;
        break;
      case 'Large Hot Chai':
      case 'Large Hot Matcha':
        scoops = 5;
        break;
    }
    return scoopsNum.innerHTML = scoops;
  }
  redbullDeterminer = () => {
    toggleDisplay('#redbulls');
    let name = `${this.size} ${this.type} ${this.name}`;
    let redbulls;
    switch (name) {
      case 'Small frozen Redbull':
        redbulls = '3/4';
      case 'Small Iced Redbull':
      case 'Small Hot Redbull':
        redbulls = 1;
        break;
      case 'Large Iced Redbull':
      case 'Large Hot Redbull':
        redbulls = 2;
        break;
    }
  }
  display() {
    resetDisplay('#shots');
    resetDisplay('#pumps');
    resetDisplay('#scoops');
    resetDisplay('#redbulls');
    let name = `${this.size} ${this.type} ${this.name}`;
    switch (name) {
      case "Small Hot Latte":
      case "Medium Hot Latte":
      case "Large Hot Latte":
      case "Small Iced Latte":
      case "Medium Iced Latte":
      case "Large Iced Latte":
      case "Small Frozen Latte":
      case "Medium Frozen Latte":
      case "Large Frozen Latte":
      case "Small Hot Cappuccino":
      case "Medium Hot Cappuccino":
      case "Large Hot Cappuccino":
      case " Hot Avalanch":
      case " Iced Avalanch":
      case " Frozen Avalanch":
        this.shotDeterminer();
        this.pumpDeterminer();
        break;
      case "Small Hot Mocha":
      case "Medium Hot Mocha":
      case "Large Hot Mocha":
      case "Small Iced Mocha":
      case "Medium Iced Mocha":
      case "Large Iced Mocha":
      case "Small Frozen Mocha":
      case "Medium Frozen Mocha":
      case "Large Frozen Mocha":
        this.shotDeterminer();
        this.scoopDeterminer();
        break;
      case 'Small Hot Chai':
      case 'Small Hot Matcha':
      case 'Medium Hot Chai':
      case 'Medium Hot Matcha':
      case 'Large Hot Chai':
      case 'Large Hot Matcha':
        this.scoopDeterminer();
        break;
      case 'Small Hot Redbull':
      case 'Large Hot Redbull':
      case 'Small Iced Redbull':
      case 'Large Iced Redbull':
      case 'Small Frozen Redbull':
      case 'Large Frozen Redbull':
        this.redbullDeterminer();
        this.pumpDeterminer();
        break;
    }
    return drinkTitle.innerHTML = name;
  }
  checker() {
    if (shotsCheckerBox.value == shotsNum.innerHTML) {
      shotsCheckerBox.style.color = 'green';
      checkedShots.innerHTML = 'correct!';
    } else {
      shotsCheckerBox.style.color = 'red';
      checkedShots.innerHTML = 'incorrect';
    };
    if (pumpsCheckerBox.value == pumpsNum.innerHTML) {
      pumpsCheckerBox.style.color = 'green';
      checkedPumps.innerHTML = 'correct!';
    } else {
      pumpsCheckerBox.style.color = 'red';
      checkedPumps.innerHTML = 'incorrect';
    };
    if (scoopsCheckerBox.value == scoopsNum.innerHTML) {
      scoopsCheckerBox.style.color = 'green';
      checkedScoops.innerHTML = 'correct!';
    } else {
      scoopsCheckerBox.style.color = 'red';
      checkedScoops.innerHTML = 'incorrect';
    };
    if (redbullsCheckerBox.value == redbullsNum.innerHTML) {
      redbullsCheckerBox.style.color = 'green';
      checkedRedbulls.innerHTML = 'correct!';
    } else {
      redbullsCheckerBox.style.color = 'red';
      checkedRedbulls.innerHTML = 'incorrect';
    };
  }
}

let randomSize = () => {
  let sizes = ['Small', 'Medium', 'Large'];
  let num = Math.floor(Math.random() * sizes.length);
  return sizes[num];
}

let randomType = () => {
  let types = ['Hot', 'Iced', 'Frozen'];
  let num = Math.floor(Math.random() * types.length);
  return types[num];
}

let randomDrink = () => {
  let num = Math.floor(Math.random() * drinkList.length);
  return drinkList[num];
}

function toggleDisplay(x) {
  let disp = document.querySelector(x);
  if (disp.style.display === 'none') {
    disp.style.display = 'flex';
  } else {
    disp.style.display = 'none';
  };
}

function resetDisplay(x) {
  let disp = document.querySelector(x);
  disp.style.display = 'none';
}

function resetContent() {
  shotsCheckerBox.value = '';
  shotsCheckerBox.style.color = 'black';
  pumpsCheckerBox.value = '';
  pumpsCheckerBox.style.color = 'black';
  scoopsCheckerBox.value = '';
  scoopsCheckerBox.style.color = 'black';
  redbullsCheckerBox.value = '';
  redbullsCheckerBox.style.color = 'black';
  checkedShots.innerHTML = '';
  checkedPumps.innerHTML = '';
  checkedScoops.innerHTML = '';
  checkedRedbulls.innerHTML = '';
}

//menu
let drinkList = [];

let hotLatte = new beverage('Latte', 'Hot', randomSize())
drinkList.push(hotLatte);
let icedLatte = new beverage('Latte', 'Iced', randomSize())
drinkList.push(icedLatte);
let frozenLatte = new beverage('Latte', 'Frozen', randomSize())
drinkList.push(frozenLatte);

let Cappuccino = new beverage('Cappuccino', 'Hot', randomSize())
drinkList.push(Cappuccino);

let hotMocha = new beverage('Mocha', 'Hot', randomSize())
drinkList.push(hotMocha);
let icedMocha = new beverage('Mocha', 'Iced', randomSize())
drinkList.push(icedMocha);
let frozenMocha = new beverage('Mocha', 'Frozen', randomSize())
drinkList.push(frozenMocha);

let hotChai = new beverage('Chai', 'Hot', randomSize())
drinkList.push(hotChai);
let hotMatcha = new beverage('Matcha', 'Hot', randomSize())
drinkList.push(hotMatcha);

let hotAvalanch = new beverage('Avalanch', 'Hot', '')
drinkList.push(hotAvalanch);
let icedAvalanch = new beverage('Avalanch', 'Iced', '')
drinkList.push(icedAvalanch);
let frozenAvalanch = new beverage('Avalanch', 'Frozen', '')
drinkList.push(frozenAvalanch);

let hotRedbullS = new beverage('Redbull', 'Hot', 'Small')
drinkList.push(hotRedbullS);
let hotRedbullL = new beverage('Redbull', 'Hot', 'Large')
drinkList.push(hotRedbullL);
let icedRedbullS = new beverage('Redbull', 'Iced', 'Small')
drinkList.push(icedRedbullS);
let icedRedbullL = new beverage('Redbull', 'Iced', 'Large')
drinkList.push(icedRedbullL);
let frozenRedbullS = new beverage('Redbull', 'Frozen', 'Small')
drinkList.push(frozenRedbullS);
let frozenRedbullL = new beverage('Redbull', 'Frozen', 'Large')
drinkList.push(frozenRedbullL);



//buttons
drinkBtn.addEventListener('click', () => {
  toggleDisplay('#drinkDisplay');
  toggleDisplay('#drinkTitle');
  randomDrink().display();
  resetContent();
});
drinkBtn.addEventListener('dblclick', () => {
  toggleDisplay('#drink');
});

newDrinkBtn.addEventListener('click', () => {
  randomDrink().display();
  resetContent();
});

checkerBtn.addEventListener('click', () => {
  randomDrink().checker();
});

answerBtn.addEventListener('click', () => {
  toggleDisplay('#shotsNum');
  toggleDisplay('#pumpsNum');
  toggleDisplay('#scoopsNum');
});