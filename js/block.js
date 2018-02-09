// //se mandan llamar elementos por su id o clase
var $selectFragmentos = $('#fragmentos');
var $contentText = $('#content-text');
var $typeTextTarea = $('#type-text');
// var $buttonSendText = $('<button />');
// $buttonSendText.attr('disabled', true);
var $buttonSendText = $('#send-text');

function loadPage() {
    $selectFragmentos.change(fragmentos);
    $typeTextTarea.keyup(typeText);
    $buttonSendText.click(sendText);
    $typeTextTarea.change()
}

function fragmentos(e) {
    e.preventDefault();
    if ($selectFragmentos.val() == "reino") {
        $typeTextTarea.val("en un reino muy lejano");
    } else if ($selectFragmentos.val() == "cdmx") {
        $typeTextTarea.val("en la cdmx");
    } else if ($selectFragmentos.val() == "una vez") {
        $typeTextTarea.val("érase una vez");
    } else if ($selectFragmentos.val() == "galaxia") {
        $typeTextTarea.val("En una galaxia aspiral");
    } else if ($selectFragmentos.val() == "hadas") {
        $typeTextTarea.val("En el bosque de las hadas");
    }
}

function typeText() {
    if ($(this).val().trim().length > 0) {
        $buttonSendText.removeAttr('disabled');
    } else {
        $buttonSendText.attr('disabled', true);
    }
}

function sendText() {
    //   //se crean elementos
    //   // var $buttonSendText = $('<button type:"submit" />');
    var $text = $('<p />');

    //   //se dan atributos y/o eventos
    //   // $buttonSendText.attr('disabled', true);

    //   //se asignan valores
    //   $buttonSendText.text('Agregar texto');
    $text.text($typeTextTarea.val());

    $contentText.append($text);
    //   // $typeTextTarea.append($buttonSendText);
    clearTextArea();
}

function clearTextArea() {
    $typeTextTarea.val("");
}

// paintHTML();

// // function sendText() {
// //   $('#text').text($typeTextTarea.val());

// // }

$(document).ready(loadPage);