var inpt = document.querySelector("#inpt");
var h2 = document.querySelector("h2");
var p = document.querySelector("p");
var show = 0;
function findMax() {
  var arr = inpt.value.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] > +show) {
      console.log(arr[i], show);
      show = arr[i];
    }
    console.log(arr[i], show);
  }
  h2.innerHTML = "Max: " + show;
}

function findMin() {
  var arr = inpt.value.split(" ");
}

function removeDuplicate() {
  //method 1
  //method 2
  //method 3
}

function findDuplicates() {}
