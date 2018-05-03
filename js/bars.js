

function bigImg(){
  var x = document.getElementsByClassName("bar");
  x.style.backgroundColor = "green";
}


class BarChart {
  constructor(data,nameClass,width,height) {
    this._data = data;
    this._nameClass = nameClass;
    this._width = width;
    this._height = height;
    this.varWidth = (this._height)/this._data.length;
    this.domArray = [];

    for ( var i = 0 ;i < data.length ; i++ ){
      this.domArray[i] = i;
    }

    /*Ancho de las barras determinada por escala va desde 0[CERO TEMPORAL EL MINIMO DEBE CAMBIAR] hasta ---*/

  }

  get data() {
    return this._data;
  }

  get nameClass(){
    return this._nameClass;
  }

  get width(){
    return this._width;
  }
  get height(){
    return this._height;
  }

  /*Metodo parametros*/
  swap( positionA , positionB ) {
    /*Este metodo intercambiara datos en el arreglo pero ademas evidenciara el cambio
  mediante colores y trancision  en el DOM*/
    var myElements =
        document.querySelectorAll( this._nameClass +  ' .bar');


    var superiorAux = positionA;      /*Posicion en el dom del elemento mas arriba visualmente*/
    var inferiorAux = positionB;      /*Posicion en el dom del elemento mas abajo visualmente*/

    if( positionA > positionB){
          superiorAux = positionB ;
          inferiorAux = positionA ;
    }

    /*Transicion en el DOM*/


    var superior = this.domArray[superiorAux];      /*Posicion en el dom del elemento mas arriba visualmente*/
    var inferior = this.domArray[inferiorAux];      /*Posicion en el dom del elemento mas abajo visualmente*/



    var positionDomSup = this.varWidth * superiorAux;   /*Posicion de la barra ubicada mas arriba*/
    var positionDomInf = this.varWidth * inferiorAux;  /*Posicion de la barra ubicada mas arriba*/
    var countToUp = this.varWidth * inferiorAux;   /*Contador para subir el elemento que esta en la parte inferior del DOM*/
    var countToDown = this.varWidth * superiorAux; /*Contador para bajar el elemento que esta en la parte superior del DOM*/

    console.log("superior" + superior + "inferior" + inferior);

    myElements[superior].style.transform = "translate(0," + positionDomInf + "px)";
    myElements[inferior].style.transform = "translate(0," + positionDomSup + "px)";
  /*var id = setInterval(frame,5);
    function frame() {
      if (countToDown >= positionDomInf) {
        clearInterval(id);
        return 1;
      } else {
        countToUp--;  /*Se resta para subirlo en el DOM*/
    /*    countToDown++;  /*Se suma para bajarlo en el DOM*/


      /*}
    }*/



        var temporal = this.domArray[positionA];
        /*Swap en DOM con arregloAuxiliar*/
        this.domArray[positionA] = this.domArray[positionB];
        this.domArray[positionB] = temporal;



    //myElements[superior].style.transition = "transform 0.5s";
    //myElements[inferior].style.transition = "transform 0.5s";


    //myElements[superior].style.fill = "blue";
    //myElements[inferior].style.fill = "blue";





    /*myElements[positionA].
      setAttribute("width",myElements[positionB].width.animVal.value);*/
    //myElements[positionA].style.transform = "translateY(" + 15 + ")";
    //myElements[positionA].style.transform = "translateY(85px)";


    //myElements[positionA].style.transition = "fill 3s";




    /*

      myElements[positionB]
      .setAttribute("width",temp);
      myElements[positionB].style.fill = "red";
        */

    /*Cambio en el arreglo de datos*/
        var aux = this._data[positionA];
        this._data[positionA] = this._data[positionB];
        this._data[positionB] = aux;
  }

  comparison(positionA , positionB ){
    /*Se puede poner a parpadear*/
    var myElements = document.querySelectorAll(this._nameClass + ' .bar');
    /*usar la clase this para seleccionar exactamente unas barras*/

    myElements[positionA].style.fill = "green";
    //myElements[positionA].setAttribute("transform", "scale(1.5)");
    myElements[positionB].style.fill = "green";

    /*Reflejara una comparacion en el DOM de los elementos de la posicion del
    arreglo de los parametros dados*/
  }
  makeDivition(){
    /*Esencial para merge Sort puede incrementar el margin donde se vaya a
    realizar la division pero ademas pondra una linea o algo para hacerlo mas
    evidente*/
  }

  graficar(){
    /*Toma del DOM la clase del grafico y los g que tiene adentro ,luego con data va añadiendo rect POR CADA DATO*/

    var aux = this.varWidth;

    var escalaX =
        d3.scaleLinear()
    .domain([0,d3.max(this._data)])
    .range([0,this._width]);


    var element = d3.select(this._nameClass)
    .selectAll("g")
    .data(this._data)
    .enter().append("rect")
    .attr("transform", function(d,i) {
      return "translate(0," + i * aux + ")";
    }).attr("class", "bar")
      .attr("width", escalaX)
      .attr("height", (aux-2));
}

}

var data = [1,2,3];
barrasTest =  new BarChart(data,".test",300,400);
barrasTest.graficar();


//barrasTest.comparison(1,2);
//barrasTest.swap(1,27);
var a = 4;
if (a == 1){
barrasTest.swap(0,3);
a = 0;
}
function arrac(){
  barrasTest.swap(0,1);

}
function ardio(){
  barrasTest.swap(0,2);
}
barrasTest.swap(1,2);









  //barrasTest.swap(4,5);

//barrasTest.swap(2,3);
//barrasTest.swap(4,5);

//barrasTest.swap(1,4);


//barrasTest.swap(5,0);
//barrasTest.swap(4,1);

//barrasTest.swap(3,2);
//console.log(barrasTest.data);
//barrasTest.swap(2,3);



function bubble(obj) {//You need Two Loops for Bubble sort
  for (var i = 0; i < obj.data.length; i++) {//Outer Loop
   for(var j=0; j < obj.data.length - 1; j++){//Inner Loop
    if (obj.data[j] > obj.data[j + 1]) {
      obj.swap( j , j+1 );
     }
   }
  }

}

//bubble(barrasTest);
/*
var myElements = document.querySelectorAll(".test");

for (var i = 0; i < myElements.length; i++) {
  console.log(myElements[i]);
    myElements[i].style.height = 100 ;
}

*/
