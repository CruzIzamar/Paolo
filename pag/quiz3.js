<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
	
	</title>
</head>
<body>

<center>
	<img src="../img/quizt.png"width="600" align="top">
    <br>
</center>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>QUIZ</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGS03+Hhxv8T/Q5PaXtkktuбug5T0eNV6gBiFeWPGFN9Muh0f23091fjh" crossorigin=" anonymous">
    <script src="appQuiz.js"></script>
</head>
<body>
    <div class="container text-center">
        <div class="row"> 
        	<div class="col-6">
        	  <hr>
              <h6>Preguntas</h6>
              
              <h2>Pregunta 1</h2> 
              <input type="radio" name="p1" value="a">A 
              <input type="radio" name="p1" value="b">B
              <input type="radio" name="p1" value="c">C
              <input type="radio" name="p1" value="d">D
              <br>
              <h2>Pregunta 2</h2>
              <input type="radio" name="p2" value="a">A
              <input type="radio" name="p2" value="b">B
              <input type="radio" name="p2" value="c">C
              <input type="radio" name="p2" value="d">D
              <br>
              <h2>Pregunta 3</h2> 
              <input type="radio" name="p3" value="a">A
              <input type="radio" name="p3" value="b">B
              <input type="radio" name="p3" value="c">C
              <input type="radio" name="p3" value="d">D
              <br>
              <h2>Pregunta 4</h2>
              <input type="radio" name="p4" value="a">A
              <input type="radio" name="p4" value="b">B 
              <input type="radio" name="p4" value="c">C 
              <input type="radio" name="p4" value="d">D
              <br> 
              <h2>Pregunta 5</h2>
              <input type="radio" name="p5" value="a">A
              <input type="radio" name="p5" value="b">B
              <input type="radio" name="p5" value="c">C
              <input type="radio" name="p5" value="d">D
 
              <br>
              <p></p>
              <button onclick="evaluarQuiz()" class="btn btn-success">Evaluar</button>
              <button onclick="resetQuiz()" class="btn btn-danger">Reset</button>

            </div>
            <div class="col-6" id="resultado">
              <hr>
              <h6>Resultado</h6>
               
              <td>
              	hola
              </td>
            </div>
        </div>
    </div>
</body>
</html>

</body>
</html>