const errorCSS = 'val-error';
const nombre = document.getElementById("cand-nombre");

const setErrorMsg = setP => {
    let control = document.querySelector("#cand-nombre + .cand-error");
    if (setP) {
        control.classList.add(errorCSS);
        //nombre.setCustomValidity("Esto es un ejemplo de error custom para el nombre");
        control.innerText = "Esto es un ejemplo de error custom para el nombre";
        return true;
    }

    control.classList.remove(errorCSS);
}

nombre.addEventListener("invalid", e => {
    e.preventDefault();
    setErrorMsg(true);

})

nombre.addEventListener("input", () => {
    setErrorMsg(false);
})
