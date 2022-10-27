//console
console.log("かどでプロジェクトの中心, かどでポータルへようこそ✾");

// トップアニメーション
const wrapper = document.querySelector(".animation-logo svg");
function draw() {
  wrapper.classList.add("active");
}

setTimeout(draw, 300);
