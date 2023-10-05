document.addEventListener("DOMContentLoaded", function(event){
    //inicializa el tooltip de bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");

    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none"; // Cerrar el pop-up al hacer clic en el botón "Cerrar"
        
        // Marcar que el pop-up se ha mostrado
        localStorage.setItem("popupShown", "true");
    });

    // Verificar si el pop-up ya se mostró anteriormente
    const popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
        overlay.style.display = "flex"; // Mostrar el pop-up si no se ha mostrado antes
        
    }
});


function onClick(element, word) {
    document.getElementById("img01").src = element.src;
    document.getElementById("slidingWords").innerHTML = "<span>" + word + "</span>";
    document.getElementById("modal01").style.display = "block";
}


