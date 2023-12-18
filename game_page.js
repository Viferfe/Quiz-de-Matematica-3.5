player1Name = localStorage.getItem('player1Name')
player2Name = localStorage.getItem('player2Name')
player1Score = 0
player2Score = 0
document.getElementById("player1Name").innerHTML = player1Name
document.getElementById("player2Name").innerHTML = player2Name
document.getElementById("player1Score").innerHTML =  0
document.getElementById("player2Score").innerHTML =  0

function send() {
    var number1Input = document.getElementById("number1");
    var number2Input = document.getElementById("number2");

    if (!number1Input || !number2Input) {
        console.error("Não foi possível encontrar os elementos de entrada.");
        return;
    }

    var number1 = number1Input.value;
    var number2 = number2Input.value;
    var actual_answer = parseInt(number1) * parseInt(number2);

    var question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    var input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    var check_button = "<br><br><button class='btn btn-info' onclick='check_answer()'>Checar</button>";
    var row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    number1Input.value = "";
    number2Input.value = "";
}

function check_answer() {
    var user_answer = document.getElementById("input_check_box").value;
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    if (!number1 || !number2) {
        console.error("Não foi possível encontrar os elementos de entrada.");
        return;
    }

    var actual_answer = parseInt(number1) * parseInt(number2);

    if (parseInt(user_answer) === actual_answer) {
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
}




