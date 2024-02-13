var inpt = document.querySelector("#inpt");
var result = document.querySelector(".result");
var h2 = document.querySelector("h2");
// var p = document.querySelector("p");
var show = 0;
function findMax() {
  var arr = inpt.value.split(" ");
  arr.forEach((element) => {
    // console.log(element);
    if (+element > +show) {
      show = element;
    }
  });
  h2.innerHTML = "Max: " + show;
}

function findMin() {
  var arr = inpt.value.split(" ");
  show = arr[0];
  arr.forEach((element) => {
    if (+element < +show) {
      show = element;
    }
  });
  h2.innerHTML = "Min: " + show;
}

function removeDuplicate() {
    var arr = inpt.value.split(" ");
    var uniqueArr = arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    h2.innerHTML = "RemoveDuplicate: " + uniqueArr;
}
function findDuplicates() {
  var arr = inpt.value.split(" ");
  var duplicates = [];

  arr.forEach((value) => {
    if (arr.indexOf(value) != arr.lastIndexOf(value) && !duplicates.includes(value)) {
      duplicates.push(value);
    }
  });

  h2.innerHTML = "Duplicates: " + duplicates;
}
