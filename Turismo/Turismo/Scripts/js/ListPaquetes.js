$(document).ready(function (e) {

    //Listado de paquetes
    var listado = function (key, rs) {
        var divPaquetes = $("#div-paquetes");
        divPaquetes.append(
            "<div class='col-md-4' style = 'cursor:pointer;' id='paquete'>" +
                "<img src='/Img/" + rs.foto1Name + "' class='img-thumbnail rounded mx-auto d-block' />" +
                "<div class='row'>" +
                    "<div class='col-md-12' align='center'>" +
                        "<label style = 'cursor:pointer;'>" + rs.titulo + "</label>" +
                    "</div>" +
                    "<div class='col-md-12' align='center'>" +
                        "<label style = 'cursor:pointer;'>Precio: S/. " + rs.precioHabDobleTripe + " por persona</label>" +
                    "</div>" +
                    "<div class='col-md-12' align='center'>" +
                        "<label style = 'cursor:pointer;'>Duración: " + rs.dias + " días y " + rs.noches + " noches</label>" +
                    "</div>" +
                "</div>" +
            "</div>"
        );
    };
    var lstPaquetes = function () {
        
        $.ajax({
            type: "POST",
            url: "/Anuncio/LstAnuncios",
            dataType: "json",
            success: function (result) {
                //console.log(result);
                $.each(result, listado);
            }
        });
    }
    lstPaquetes();

    //Listado de regiones
    var lstDestino = function () {
        var selectDestino = $("#select-región");
        $.ajax({
            type: "POST",
            url: "/Anuncio/LstDestinos",
            dataType: "json",
            success: function (result) {
                console.log(result);
                selectDestino.append(
                    "<option selected>Seleccione una región</option>"
                );
                $.each(result, function (key, rs) {
                    selectDestino.append(
                        "<option value='" + rs.destino + "'>" + rs.destino + "</option>"
                    );
                });
            }
        });
    }
    lstDestino();

    //Filtro de paquetes por región
    var filtrarPaquetesByRegion = function () {
        var region = $("#select-región").val();
        $.ajax({
            type: "POST",
            url: "/Paquete/LstPaquetesByRegion",
            data: { region: region },
            dataType: "json",
            success: function (result) {
                //console.log(result);
                $.each(result, listado);
            }
        });
    };
    $("#select-región").change(filtrarPaquetesByRegion);

    //Detalle de paquete turistico
    var detalle_paquete = function () {
        $("#detalleModal").modal("show");
    }
    $("#div-paquetes").on("click", "#paquete", detalle_paquete);
});