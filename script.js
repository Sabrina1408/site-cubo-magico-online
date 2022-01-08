let show = true;

const cabecalho = document.querySelector(".cabecalho")
const menuHamburger = cabecalho.querySelector(".menu-hamburger")

menuHamburger.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    cabecalho.classList.toggle("on", show)
    show = !show;
})