const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalNavlist = navlist.length,
  allsection = document.querySelectorAll(".section"),
  totalsection = allsection.length;
for (let i = 0; i < totalNavlist; i++) {
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalsection; i++) {
      allsection[i].classList.remove("backsection");
    }
    for (let j = 0; j < totalNavlist; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        allsection[j].classList.add("backsection");
      }
      navlist[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showsection(this);
    if (window.innerWidth < 1200) {
      asidesectiontogglerBtn();
    }
  });
}
function showsection(el) {
  for (let i = 0; i < totalsection; i++) {
    allsection[i].classList.remove("active");
  }
  const target = el.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(el) {
  for (let i = 0; i < totalNavlist; i++) {
    navlist[i].querySelector("a").classList.remove("active");
    const target = el.getAttribute("href").split("#")[1];
  }
}
document.querySelector(".hire-me").addEventListener("click", () => {
  showsection(this);
  updateNav(this);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const navtogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navtogglerBtn.addEventListener("click", () => {
  asidesectiontogglerBtn();
});

function asidesectiontogglerBtn() {
  aside.classList.toggle("open");
  navtogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalsection; i++) {
    allsection[i].classList.toggle("open");
  }
}
