document.querySelector("#level1").addEventListener(
  "click",
  (e) => {
    console.log("Level 1 div is clicked! ☺️");
  },
  true
);

document.querySelector("#level2").addEventListener(
  "click",
  (e) => {
    console.log("Level 2 div is clicked! ☺️");
  },
  false
);

document.querySelector("#level3").addEventListener(
  "click",
  (e) => {
    console.log("Level 3 div is clicked! ☺️");
  },
  true
);

document.querySelector("#level4").addEventListener(
  "click",
  (e) => {
    console.log("Level 4 div is clicked! ☺️");
    e.stopPropagation(); // prevents the event from bubbling further up or down (if in the capturing phase).
  },
  false
);

document.querySelector("#level5").addEventListener(
  "click",
  (e) => {
    console.log("Level 5 div is clicked! ☺️");
  },
  true
);
