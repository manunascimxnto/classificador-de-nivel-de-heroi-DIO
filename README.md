# ⚔️ Hero Level Classifier (DIO)

> This project was developed as part of the **"Programação do Zero (Programming from Scratch)"** bootcamp by *[Digital Innovation One (DIO)](https://www.dio.me)*, carried out in *2023*. The goal was to practice basic programming concepts in **JavaScript**, such as **how to use variables to store data, applying decision structures (if/else), practicing loops and logical conditions, and building a simple classification system in JavaScript**.

---

## 🛠️ Skills developed in the bootcamp:

![Programming Logic](https://img.shields.io/badge/Programming%20Logic-blue) ![Problem Solving](https://img.shields.io/badge/Problem%20Solving-green) ![JavaScript](https://img.shields.io/badge/JavaScript-yellow) ![Git](https://img.shields.io/badge/Git-orange) ![GitHub](https://img.shields.io/badge/GitHub-black) ![Agile Methodologies (Scrum)](https://img.shields.io/badge/Agile%20Methodologies%20(Scrum)-purple)

---

## 🎯 Goal

Create a variable to store the hero’s **name** and **experience points (XP)**, then use a decision structure to classify the hero into one of the following levels:

- XP < 1000 → **Iron**  
- XP between 1001 and 2000 → **Bronze**  
- XP between 2001 and 5000 → **Silver**  
- XP between 6001 and 7000 → **Gold**  
- XP between 7001 and 8000 → **Platinum**  
- XP between 8001 and 9000 → **Ascendant**  
- XP between 9001 and 10000 → **Immortal**  
- XP ≥ 10001 → **Radiant**  

---

## 🚀 Usage Example

```javascript
function classifier() {
  var name = "Arthus";
  var xp = 7500;
  var level = "";

  if (xp <= 1000) {
    level = "Iron";
  } else if (xp <= 2000) {
    level = "Bronze";
  } else if (xp <= 5000) {
    level = "Silver";
  } else if (xp <= 7000) {
    level = "Gold";
  } else if (xp <= 8000) {
    level = "Platinum";
  } else if (xp <= 9000) {
    level = "Ascendant";
  } else if (xp <= 10000) {
    level = "Immortal";
  } else {
    level = "Radiant";
  }

  console.log("The Hero named " + name + " is at level " + level);
}

classifier();
