Function tocaSom (idElementoAudio){ 
   document.querySelector(idElementoAudio).play() 
}

const listadeTeclas = document. querySelectorA11 ('. tecla'); 

let contador = 0; 

for (let contador = O; contador < listaDeTeclas.length; contador++) {

const tecla = listaDeTeclas [contador];
  const instrumento = tecla.classList[1]; 
  const idAudio = '#som ${instrumento]* • //template string 
    
    tecla.onclick = function () {
      tocaSom (idAudio);
    }

}
