var datos = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

var x = d3.scaleLinear()
  .domain([0, d3.max(datos)])
  .range([0, 150])

function graficar() {
  d3.select(".barras") /*Toma la clase barras */
    .selectAll("div")
    .data(datos)
    .enter()
    .append('div')
    .style("width", function(d) {
      return x(d) + "px"
    })
    .text(function(d) {
      return d;
    })

}

function seleccionarBloque() {
  d3.select('.bloque') /*Selecciona elementos especificos por clase(.) o id(#) en el DOM*/
    .style("background-color", "red ");
}

function seleccionarBloqueB() {
  d3.select('.bloque') /*Selecciona elementos especificos por clase(.) o id(#) en el DOM*/
    .selectAll('div')
    .style("background-color", "blue")
    .style("color", "red")
    .style("padding", "5px") /*Se pueden agregar varios estilos usando '.'*/
    .style("margin", '5px');
}

function seleccionar() {
  d3.selectAll('div') /*Selecciona varios elementos en el DOM*/
    .style("background-color", "green");
}
