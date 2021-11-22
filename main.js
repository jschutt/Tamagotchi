// let checkStats = () => {
//     if(this.tiredness <= 0){
//         this.tiredness = 0;
//     } else if(this.tiredness > 100){
//         this.tiredness = 100;
//     }
// };

class Pet {
  constructor(name = "", animal = "") {
    this.name = name;
    this.animal = animal;
    this.tiredness = 50;
    this.happiness = 50;
    this.hunger = 50;
    this.loneliness = 50;
  }
  //Pet interaction
  nap() {
    //this.tiredness = this.tiredness - 50;
    this.tiredness -= 50;
    this.happiness -= 20;
    this.hunger += 20;
    this.loneliness += 20;
  }

  play() {
    if (this.tiredness <= 70) {
      this.tiredness += 20;
      this.happiness += 30;
      this.hunger += 20;
      this.loneliness -= 10;
    } else {
      console.log("Pet is too tired");
    }
  }
  eat() {
    this.tiredness += 10;
    this.hunger -= 60;
    if (this.hunger <= 0) {
      this.hunger = 0;
    }
  }
  checkStats() {
    if (this.tiredness === 0) {
      console.log("Pet died!");
    }
  }
}

let createPetBtn = document.querySelector("#createPetBtn");
let petNameInput = document.querySelector("#petNameInput");
let animalType = document.querySelector("#animalList option:checked");
let mainPetContainer = document.querySelector("#mainPetContainer");
mainPetContainer.style.display = "none";

createPetBtn.addEventListener("click", () => {
  let myPet = new Pet(petNameInput.value, animalList.value);
  mainPetContainer.style.display = "block";
  let imgContainer = document.createElement("div");
  let petContainer = document.createElement("div");
  let btnContainer = document.createElement("div");
  let statContainer = document.createElement("div");
  let titleContainer = document.createElement("div");

  //Name, type and activity text
  let petName = document.createElement("p");
  let petType = document.createElement("p");
  let petActivity = document.createElement("p");
  petActivity.textContent = `${myPet.name} is looking at you...`;
  petName.textContent = `Name: ${myPet.name}`;
  petType.textContent = `Animal: ${myPet.animal}`;

  //Create stat tags
  let tiredness = document.createElement("p");
  let happiness = document.createElement("p");
  let hunger = document.createElement("p");
  let loneliness = document.createElement("p");

  //Interact buttons
  let napBtn = document.createElement("button");
  let playBtn = document.createElement("button");
  let eatBtn = document.createElement("button");
  napBtn.textContent = "Nap";
  playBtn.textContent = "Play";
  eatBtn.textContent = "Eat";

  //Assign classNames to divs (for CSS)
  petContainer.className = "petContainer";
  imgContainer.className = "imgContainer";
  btnContainer.className = "btnContainer";
  statContainer.className = "statContainer";
  titleContainer.className = "titleContainer";
  //classNames for p elements
  petName.className = "petName";
  petType.className = "petType"
  petActivity.className = "petActivity";

  //Append containers, text and buttons
  mainPetContainer.appendChild(petContainer);
  petContainer.append(titleContainer, imgContainer, petActivity, btnContainer);
  titleContainer.append(petName, petType);
  btnContainer.append(napBtn, playBtn, eatBtn);

  //Pet image, choose image depending on type
  let petImg = document.createElement("img");
  if (myPet.animal === "Cat") {
    petImg.src = "./img/pixel-cat.png";
    petImg.style.width = "225px";
    imgContainer.append(petImg);
  } else if (myPet.animal === "Dog") {
    petImg.src = "./img/pixel-dog.png";
    petImg.style.width = "300px";
    imgContainer.append(petImg);
  } else if (myPet.animal === "Rabbit") {
    petImg.src = "./img/pixel-rabbit.png";
    petImg.style.width = "300px";
    imgContainer.append(petImg);
  }

  //Function to update stat text
  let updateStats = () => {
    tiredness.textContent = `Tiredness: ${myPet.tiredness} `;
    happiness.textContent = `Happiness: ${myPet.happiness} `;
    hunger.textContent = `Hunger: ${myPet.hunger} `;
    loneliness.textContent = `Loneliness: ${myPet.loneliness} `;
  };

  //Initiate pet stats
  updateStats();

  //Append stats
  petContainer.appendChild(statContainer);
  statContainer.append(tiredness, happiness, hunger, loneliness);

  //Pet button interaction
  napBtn.addEventListener("click", () => {
    myPet.nap();
    updateStats();
    petActivity.textContent = `${myPet.name} took a nap.`;
    console.log(myPet);
  });

  playBtn.addEventListener("click", () => {
    myPet.play();
    updateStats();
    petActivity.textContent = `You played with ${myPet.name}!`;
    console.log(myPet);
  });

  eatBtn.addEventListener("click", () => {
    myPet.eat();
    updateStats();
    petActivity.textContent = `You gave ${myPet.name} something to eat.`;
    console.log(myPet);
  });

  console.log(myPet);
});
