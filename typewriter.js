"use strict";

document.addEventListener("DOMContentLoaded", init);
let text = "";
let counter;
const typekeys = ["typekey1", "typekey2"];
let sound;

function init() {
  console.log("init");
  text = document.querySelector(".typewritten").textContent;
  counter = 1;

  sound = document.createElement("AUDIO");

  //remove html content
  document.querySelector(".typewritten").textContent = "";

  loop();
}

function loop() {
  console.log("loop");
  document.querySelector(".typewritten").textContent = text.substring(0, counter);

  if (text[counter - 1] == " ") {
    sound.src = "typespace.mp3";
    sound.play();
  } else if (text.length == counter) {
    //if it is the last key
    sound.src = "typelastkey.mp3";
    sound.play();
  } else {
    //play a random typekey
    typeKey(sound);
  }

  //if it is the last key

  counter++;

  let randKeyDuration = Math.random() * (800 - 200) + 200;

  if (text.length >= counter) {
    setTimeout(loop, randKeyDuration);
  }
}

function typeSpace() {
  document.querySelector("#typespace").play();
}

function typeLastKey() {
  document.querySelector("#typelast").play();
}

function typeKey(audioElement) {
  const randTypekey = Math.floor(Math.random() * 2);
  let typedKey = typekeys[randTypekey];

  //play a random sound for a character revealed
  // document.querySelector(`#${typedKey}`).play();
  audioElement.src = `${typedKey}.mp3`;
  audioElement.play();
}

//add each character to an array and use split method
