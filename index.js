/*Heladería

Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo,
 "Aquí tiene su helado de chocolate, dulce de leche y menta granizada". */

alert("Queremos conocer tu Top 3 de Helados")

let gustoHeladoUno = prompt("Diga un gusto de Helado")

let gustoHeladoDos = prompt("Diga un gusto de Helado")

let gustoHeladoTres = prompt("Diga un gusto de Helado")

let gustosHeladosUsuario = gustoHeladoUno + " " + gustoHeladoDos + " " + "y" + " " + gustoHeladoTres

confirm("Tus gustos de Helado son " + gustosHeladosUsuario)