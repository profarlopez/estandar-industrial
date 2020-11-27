/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    let desplazamientoActual=window.pageXOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "=0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top="-100px"
    }
    ubicacionPrincipal=desplazamientoActual;
})


