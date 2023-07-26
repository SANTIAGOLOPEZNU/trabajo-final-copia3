/*
//creamos el carrusel de cards
//creamos el gutter
    //creamos el primer div
    var cuerpo = document.getElementById("cuerpo");
    var div1 = document.createElement("div");
    div1.id = "gutteer";
    div1.className = "container px-4 text-center";
    cuerpo.appendChild(div1);

    //creamos el segundo div
    var row1 = document.createElement("div");
    row1.id = "primerrow";
    row1.className = "row gx-5";
    gutteer.appendChild(row1)

for (var i = 0; i <= 9; i++) {
    var centrar = document.getElementById("primerrow");
    var div1 = document.createElement("div");
    div1.id = "primerdiv "+i;
    div1.className = "col";
    div1.textContent = "hola";
    centrar.appendChild(div1);

    //contruyendo un card
        //construimos el primer div
        var cuerpo1 = document.getElementById("primerdiv" + i);
        var contenedor1 = document.createElement("div");
        contenedor1.textContent = "hhhh";
        contenedor1.id = "card1" + i;
        contenedor1.className = "card";
        contenedor1.style = "width: 18rem;"
        cuerpo1.appendChild(contenedor1);

        //construimos una imagen
        var card1 = document.getElementById("card1" + i);
        var img = document.createElement("img");
        img.src = "/img/zapa"+i+".jpg";
        img.className = "card-img-top";
        img.alt = "fondo-paisaje"
        card1.appendChild(img);

        //construimos el segundo div
        var div2 = document.getElementById("card1" + i);
        var contenedor2 = document.createElement("div");
        contenedor2.id = "div2" + i;
        contenedor2.className = "card-body";
        div2.appendChild(contenedor2);

        //construimos un h5
        var h5 = document.createElement("h5");
        h5.textContent = articulo[i];
        h5.className = "card-title";
        div2.appendChild(h5);

        //construimos un parrafo
        var p = document.createElement("p");
        p.textContent = precio[i];
        p.className = "card-text";
        div2.appendChild(p);

        //construimos un enlace
        var a = document.createElement("a");
        a.textContent = "ver mas";
        a.className = "btn btn-primary";
        div2.appendChild(a);
}

*/

//dom parte zapatilas
function cantidadcard() {

    var cantidad = document.getElementById('cantidad').value;
    var producto = document.getElementById('producto').value;



    switch (producto) {
        case "todas las marcas": articulo = ["adidas ADI2000 Yu-Gi-Oh! Yugi’s World ", "adidas Forum Buckle Low Bad Bunny Blue Tint", "adidas Forum Buckle Low Bad Bunny Last Forum", "adidas Campus Light Bad Bunny Cream", "adidas Campus Light Bad Bunny Wild Moss", "adidas Adilette 22 Slides Carbon","adidas yeezy foam RNR MX cinder","adidas yeezy knit RNR boot sulfur","adidas yeezy boost 380 alien","adidas yeezy boost 350 V2 dazzling blue","Air Jordan 1 Low Vintage Stealth Grey", "Air Jordan 1 Mid Taxi (GS)", "Jordan 1 High Element Gore-Tex Light Bone", "Jordan 1 High Zoom Air CMFT Patent Chicago", "Jordan 1 Low Light Madder Root", "Jordan 1 Low Pollen", "Jordan 1 Mid Armory Navy", "Jordan 4 Retro Military Black", "Jordan 4 Retro Black Cat (2020)","Air Force 1 Low Triple White", "Air Force 1 High Black", "Nike Dunk Low SE World Champs Black White", "Nike SB Air Force 2 Low Rivals Pack", "Nike Air Force 1 Low ’07 LV8 World Champ Black Purple", "Nike Air Force 1 Low ’07 QS Purple Skeleton Halloween", "Nike Air Force 1 Low SP AMBUSH Game Royal", "Nike Air Force 1 Low Siempre Familia", "Nike Air Force 1 Low SP AMBUSH Pine Green"];
            precio = ["$395.00", "$570.00 – $690.00", "$450.00 – $600.00", "$375.00 – $455.00", "$480.00", "$120.00","$230.00 - $265.00","$800.00","$265.00","$420.00 - $540.00",]; break;
        
        case "adidas": articulo = ["adidas ADI2000 Yu-Gi-Oh! Yugi’s World ", "adidas Forum Buckle Low Bad Bunny Blue Tint", "adidas Forum Buckle Low Bad Bunny Last Forum", "adidas Campus Light Bad Bunny Cream", "adidas Campus Light Bad Bunny Wild Moss", "adidas Adilette 22 Slides Carbon"];
            precio = ["$395.00", "$570.00 – $690.00", "$450.00 – $600.00", "$375.00 – $455.00", "$480.00", "$120.00"]; break;

        case "adidas yeezy": articulo = ["adidas yeezy foam RNR MX cinder","adidas yeezy knit RNR boot sulfur","adidas yeezy boost 380 alien","adidas yeezy boost 350 V2 dazzling blue"];
            precio = ["$230.00 - $265.00","$800.00","$265.00","$420.00 - $540.00"]; break;

        case "jordan": articulo = ["Air Jordan 1 Low Vintage Stealth Grey", "Air Jordan 1 Mid Taxi (GS)", "Jordan 1 High Element Gore-Tex Light Bone", "Jordan 1 High Zoom Air CMFT Patent Chicago", "Jordan 1 Low Light Madder Root", "Jordan 1 Low Pollen", "Jordan 1 Mid Armory Navy", "Jordan 4 Retro Military Black", "Jordan 4 Retro Black Cat (2020)"];
            precio = ["$215.00 – $275.00", "$290.00", "$310.00 – $345.00", "$265.00", "$185.00 – $265.00", "$275.00", "$220.00 – $300.00", "$420.00", "$840.00 – $1,000.00"]; break;

        case "nike": articulo = ["Air Force 1 Low Triple White", "Air Force 1 High Black", "Nike Dunk Low SE World Champs Black White", "Nike SB Air Force 2 Low Rivals Pack", "Nike Air Force 1 Low ’07 LV8 World Champ Black Purple", "Nike Air Force 1 Low ’07 QS Purple Skeleton Halloween", "Nike Air Force 1 Low SP AMBUSH Game Royal", "Nike Air Force 1 Low Siempre Familia", "Nike Air Force 1 Low SP AMBUSH Pine Green"];
            precio = ["$150.00", "$305.00", "$275.00", "$150.00", "$230.00 – $240.00", "$240.00 – $265.00", "$300.00", "$175.00 – $185.00", "$450.00"]; break;

    }
    



    //eliminmos el elemento
    var cuerpo = document.getElementById("cuerpo");
    var div1 = document.getElementById("gutteer");
    cuerpo.removeChild(div1);

    //creamos el gutter
    //creamos el primer div
    var cuerpo = document.getElementById("cuerpo");
    var div1 = document.createElement("div");
    div1.id = "gutteer";
    div1.className = "container px-4 text-center";
    cuerpo.appendChild(div1);

    //creamos el segundo div
    var row1 = document.createElement("div");
    row1.id = "primerrow";
    row1.className = "row gx-5";
    gutteer.appendChild(row1)

    for (var i = 0; i < cantidad; i++) {

        //creamos el tercer div
        var row = document.getElementById("primerrow");
        var col1 = document.createElement("div");
        col1.id = "col" + i;
        col1.className = "col-4 mx-auto";
        row.appendChild(col1);


        //contruyendo un card
        //construimos el primer div
        var cuerpo = document.getElementById("col" + i);
        var contenedor1 = document.createElement("div");
        //contenedor1.textContent = "hhhh";
        contenedor1.id = "card1" + i;
        contenedor1.className = "card";
        contenedor1.style = "width: 18rem;"
        cuerpo.appendChild(contenedor1);

        //construimos una imagen
        var card1 = document.getElementById("card1" + i);
        var img = document.createElement("img");
        img.src = "/img/zapatillas/" + producto + i + ".jpg";
        img.className = "card-img-top";
        img.alt = "fondo-paisaje"
        card1.appendChild(img);

        //construimos el segundo div
        var div2 = document.getElementById("card1" + i);
        var contenedor2 = document.createElement("div");
        contenedor2.id = "div2" + i;
        contenedor2.className = "card-body";
        div2.appendChild(contenedor2);

        //construimos un h5
        var h5 = document.createElement("h5");
        h5.textContent = articulo[i];
        h5.className = "card-title";
        div2.appendChild(h5);

        //construimos un parrafo
        var p = document.createElement("p");
        p.textContent = precio[i];
        p.className = "card-text";
        div2.appendChild(p);

        //construimos un enlace
        var a = document.createElement("a");
        a.textContent = "ver mas";
        a.className = "btn btn-primary";
        div2.appendChild(a);


    }


}