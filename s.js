let f = document.querySelector("form");
let i = document.querySelector("input");
let b = document.querySelector("button");
let h = document.querySelector("h2");
let o = document.querySelector(".one");
let t = document.querySelector(".two");
let box = document.querySelector(".box");

let tw = [];   // stores guesses
let index = 1;
let rand = Math.floor(Math.random() * 100);
console.log("Answer:", rand);

f.addEventListener("submit", (e) => {
  e.preventDefault();
  h.style.display = "block";

  let inp = Number(i.value);  // get fresh input every submit

  if (i.value == "" || i.value < 1 || i.value > 99 || !inp) {
    h.textContent = "error enter right value";
    h.style.color = "red";
    i.value = "";
    return;
  } else if (rand > i.value) {
    h.textContent = "its too low buddy";
    i.value = "";
  } else if (rand < i.value) {
    h.textContent = "its too high buddy";
    i.value = "";
  } else if (rand === i.value) {
    h.textContent = `winner: the answer is ${rand}`;
    disable();
    bu();
  }

  sp();
  abc(inp);  // pass current input to store in array
});

function disable() {
//   b.classList.add("ab");
  b.style.display="none"
  i.style.display = "none";
 
}

function enable() {
    b.style.display="initial"
//   b.classList.add("ba");
  i.style.display = "initial";
  o.textContent = 10;
  o.style.color = "black";
  index = 1;
  h.textContent = "";
  tw = [];       // reset guesses
  t.textContent = ""; // clear old guesses
  
}

function sp() {
  o.textContent = 10 - index;
  index++;
  if (index == 11) {
    o.style.color = "red";
    disable();
    h.textContent="gme over"
    bu();
  }
}

function bu() {
  let bu = document.createElement("button");
  bu.textContent = "new game";
  box.append(bu);
  bu.addEventListener("click", () => {
    f.reset();
    enable();
    bu.remove();   // remove restart button
    h.style.display = "none";
  });
}

function abc(inp) {
  if (tw.length < 10) {
    tw.push(inp);
    t.textContent = tw.join(", "); // show guesses in span
  }
}
