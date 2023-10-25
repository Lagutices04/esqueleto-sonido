let esqueleto = "off";
//practicamente prende y apaga 
//quiero cambiar de estado de on a off que reproduzca o no el sonido,se guiarda el estado del elemento
let esqueletoStop = document.getElementById("esqueletoquieto")
//guarda el estado y trae EL ID DE LA CLASE
let botonSonido = new Audio('../sound/botonbailar.mp3');
//nuevo audio y la ruta de ese audio
let botonAudio = new Audio('../sound/audio1.mp3');
function bailar(){
    //se pone musica y movimiento
    if(esqueleto =="off"){
        esqueleto = "on";
        //== comparar
        //= asignando
        console.log("On");
        esqueletoStop.classList.add("on");
        //solo se llama la clase on
        
        //agregue la clase on cuando se de click se activara la clase on,pondra on donde esta off y traera la imagen que esta en movimiento   
        esqueletoStop.addEventListener('click',()=>{
            //si se da click va a sonar clickeo
            botonSonido.play();
            //se activa sonido
        } ) 
        esqueletoStop.addEventListener('click',()=>{
            //aqui suena la cancion tururu
            botonAudio.play();
        })   
    }else {

        esqueleto ="off"
        esqueletoStop.classList.remove("on");
        //te devuelve la que este por defetecto en el html
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.pause();
            // se pausa cancion tururu pero no la del sonido del clickeo
        })
        console.log("Off");
        
    }

}