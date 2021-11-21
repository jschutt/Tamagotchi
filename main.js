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
  //Metoder
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


createPetBtn.addEventListener("click", () => {
  let myPet = new Pet(petNameInput.value, animalList.value);
  let imgContainer = document.createElement("div");
  let petContainer = document.createElement("div");
  petContainer.style.border = "1px black solid";
  mainPetContainer.appendChild(petContainer);
  petContainer.appendChild(imgContainer);

  //For the pet
  let petName = document.createElement("p");
  let animal = document.createElement("p");
  let petActivity = document.createElement("p");
  petActivity.textContent = "";
  petName.textContent = `Name: ${myPet.name}`;
  animal.textContent = `Animal: ${myPet.animal}`;

  //Pet image
  let petImg = document.createElement("img");
  if (myPet.animal === "Cat") {
    petImg.src = "./img/pixel-cat.jpg";
    petImg.style.width = "300px";
    imgContainer.append(petImg);

  } else if(myPet.animal === "Dog"){
    petImg.src = "./img/pixel-dog.png";
    petImg.style.width = "300px";
    imgContainer.append(petImg);

  } else if(myPet.animal === "Rabbit"){
    petImg.src = "./img/pixel-rabbit.png";
    petImg.style.width = "300px";
    imgContainer.append(petImg);
  }

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

  let updateStats = () => {
    tiredness.textContent = `Tiredness: ${myPet.tiredness}`;
    happiness.textContent = `Happiness: ${myPet.happiness}`;
    hunger.textContent = `Hunger: ${myPet.hunger}`;
    loneliness.textContent = `Loneliness: ${myPet.loneliness}`;
  };

  //Refresh pet stats
  updateStats();

  //Append pet information
  petContainer.append(petName, animal);
  petContainer.append(tiredness, happiness, hunger, loneliness);
  petContainer.append(napBtn, playBtn, eatBtn, petActivity);

  //Pet interaction
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
