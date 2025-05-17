const headerIni = document.querySelector(".container .header")

window.addEventListener('scroll', function() {
    // Get scroll position
    const scrollY = window.scrollY || window.pageYOffset;
    
    if(scrollY >= 20){
        headerIni.style.height = "70px"
        headerIni.style.boxShadow = "rgba(0, 0, 0, 0.06) 0px 6px 24px";
    } else {
        headerIni.style.height = "100px"
        headerIni.style.boxShadow = "rgba(255, 255, 255, 0.06) 0px 6px 24px";
    }
});

const navBila = document.querySelector(".bawah .navKiri .asli")
let tinggiWeb = window.innerHeight
console.log(navBila.clientHeight)
if(navBila.clientHeight >= tinggiWeb - 100){
    navBila.style.height = "calc(100vh - 100px)";
    navBila.style.overflowY = "scroll";
}

