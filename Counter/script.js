document.getElementsByClassName("dec-btn")[0].onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementsByClassName("reset-btn")[0].onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementsByClassName("inc-btn")[0].onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};
