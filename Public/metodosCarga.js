   

    function CargarLista(){
    //Remover la lista cargada anterior
      $("#listaCarga").remove();
    //Generar un nuevo nodo lista
      $("#listaDetalle").append("<h5><ol id="+"listaCarga"+"></ol></h5>");

   //Cargar la lista con el array

    for (var i = 0; i < listaPartes.length; i++) {

    // create a new li
    var newLI = document.createElement("button");
    newLI.className = "btn btn-light btn-block";
    newLI.id="Detalle"+i+"";
    newLI.style="font-size:large;";
    
    var indSpellingWord = listaPartes[i];

    // grab the spelling list item 
    var newContent = document.createTextNode(indSpellingWord);


    // add the spelling list item to the li
    newLI.appendChild(newContent);

    // get the unordered list and add the new li
    var displaySpellList = document.getElementById("listaCarga");
    displaySpellList.appendChild(newLI);
  }}

  
function CargarIframe(frame){

$("#contenedor").attr("src",frame);

}
 
   var srchp;
   var srcempy=null;


function clickLoop(nombre,lista){
       
  for(var i=0; i<lista.length; i++) {
    (function (i) {
     $("#Detalle" + i).click(
      function () { 
      CargarIframe("atlas/"+nombre+"/"+nombre+i+".html");
              

              srchp="atlas/"+nombre+"/"+nombre+i;
              srcempy="Carga Completa";

            }




        );
     })(i);
}



   }

function cargarAtlas (){
 
 

     $("#tipo").click(
    function(){


    if(srcempy != null ){

       CargarIframe(srchp+" Atlas.html");
     }
    else{
     alert("Seleccione un hueso");
    }
   
   
    }
    )
     }


     function cargarXray (){
 
 

     $("#radiografia").click(
    function(){


    if(srcempy != null ){

       CargarIframe(srchp+" xray.html");
     }
    else{
     alert("Seleccione un hueso");
    }
   
   
    }
    )
     }


 
