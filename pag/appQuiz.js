function evaluarQuiz()
{
 let repuestasCorrectas=["a","b","c","d","a"];

 let respuestasUsuario=new Array(); 
 let respuestasPregunta=new Array();

 let aciertos=0;

 let countPreguntas=0; 
 let bien="bien.png";

 let mal="mal.jpg";

 let imagenesRespuestas=new Array ();

 for (var i = 0; i <5; i++) {
     respuestasPregunta=document.getElementsByName('p'+(i+1));
     for (var j = 0; j <=3; j++) {
         if(respuestasPregunta[j].checked==true){
         	 countPreguntas++;
             respuestasUsuario[i]=respuestasPregunta[j].value; 
             if(respuestasPregunta[j].value==repuestasCorrectas[i]){ 
             	imagenesRespuestas[i]=bien;
                aciertos++;
            }else{ 
            	imagenesRespuestas[i]=mal;
            }
        }
    }
}

for (var i = 0; i < 5; i++) {
    console.log("Respuesta "+ (i+1)+""+respuestasUsuario[i]+ "Imagen "+imagenesRespuestas [i]) 
}
if (countPreguntas==5) {
html="<table class= 'table'>";

html+= "<hr>"
html+= "<td>Pregunta</td>";
html+= "<td>Respuesta Usuario</td>"; html+= "<td>Respuesta Correcta</td>";
html+="<td>Imagen</td>";
html+= "<tr>"; 
for (var i= 0; i <5; i++) {
html+= "<tr>";
html+= "<td>"+(i+1)+"</td>";
html+="<td>"+respuestasUsuario[i]+"</td>";
html+="<td>"+repuestasCorrectas[i]+"</td>"; 
html+="<td> <img src='"+imagenesRespuestas[i]+"' width=30 height=30> </td>";
html+= "<tr>";
}
html+="</table>"; 
html+="<h4>CALIFICACION= "+aciertos+"</h4>";
document.getElementById('resultado').innerHTML=html;
}else{

alert("Falta contestar Preguntas");
}

}


function resetQuiz() {
     for (var i = 0; i < 5; i++) {
 respuestasPregunta= document.getElementsByName('p'+(i+1));
     for (var j = 0; j <=3; j++) {
         respuestasPregunta[j].checked=false;
}
}
document.getElementsById('resultado').innerHTML="";
}