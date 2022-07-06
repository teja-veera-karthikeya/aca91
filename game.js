number1=""
number2=""

player_1_name = localStorage.getItem("player_1")
player_2_name = localStorage.getItem("player_2")

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name + " : ";
document.getElementById("player_2_name").innerHTML = player_2_name + " : ";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("question_turn").innerHTML = "Question turn :" + player_1_name;
document.getElementById("answer_turn").innerHTML = "Answer turn :" + player_2_name;

function send(){
    number1=document.getElementById("Number1").value
    number2=document.getElementById("Number2").value
    actval_answer=parseInt(number1)*parseInt(number2)

    q = "<h3>"+number1+"X"+number2+"</h3>"
    answer = "<br>  Answer : <input type='text' id='input_check_box'>"
    button = "<br> <br> <button class='btn btn-info' onclick='check()'>check</button>"
    row = q + answer + button
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value = ""
    document.getElementById("Number2").value = ""
}