var flag="x";
function fnBtn0(){
    if(flag=="x"){
        document.getElementById("box0").value ="x";
        document.getElementById("box0").disabled =true;
        flag = "o";
    }else{
        document.getElementById("box0").value = "o";
        flag = "x";
    }
}
function fnBtn1(){
    if(flag=="x"){
        document.getElementById("box1").value = "x";
        document.getElementById("box1").disabled = true;
        flag = "o";
    }else{
        document.getElementById("box1").value ="o";
        flag = "x";
    }
}
function fnBtn2(){
    if(flag=="x"){
        document.getElementById("box2").value = "x";
        document.getElementById("box2").disabled = true;
        flag = "o";
    }else{
        document.getElementById("box2").value="o";
        flag = "x";
    }
}
function fnBtn3(){
    if(flag=="x"){
        document.getElementById("box3").value = "x";
        document.getElementById("box3").disabled = true;
        flag ="o";
    }else{
        document.getElementById("box3").value = "o";
        flag = "x";
    }
}
function fnBtn4(){
    if(flag=="x"){
        document.getElementById("box4").value = "x";
        document.getElementById("box4").disabled = true;
        flag = "o";
    }else{
        document.getElementById("box4").value = "o";
        flag = "x";
    }
}
function fnBtn5(){
    if(flag=="x"){
        document.getElementById("box5").value = "x";
        document.getElementById("box5").disabled = true;
        flag = "o";
    }else{
        document.getElementById("box5").value = "o";
        flag = "x";
    }
}
function fnBtn6(){
    if(flag=="x"){
        document.getElementById("box6").value = "x";
        document.getElementById("box6").disabled = true;
        flag = "o";
    }else{
        document.getElementById("box6").value = "o";
        flag = "x";
    }
}
function fnBtn7(){
    if(flag=="x"){
        document.getElementById("box7").value = "x";
        document.getElementById("box7").disabled = true;
        flag = "o";
    }else{
        document.getElementById("box7").value = "o";
        flag = "x";
    }
}
function fnBtn8(){
    if(flag=="x"){
        document.getElementById("box8").value = "x";
        document.getElementById("box8").disabled = true;
        flage = "o";
    }else{
        document.getElementById("box8").value = "o";
        flag = "x";
    }
}
function resCheck(){
    var bx0 = document.getElementById("box0").value;
    var bx1 = document.getElementById("box1").value;
    var bx2 = document.getElementById("box2").value;
    var bx3 = document.getElementById("box3").value;
    var bx4 = document.getElementById("box4").value;
    var bx5 = document.getElementById("box5").value;
    var bx6 = document.getElementById("box6").value;
    var bx7 = document.getElementById("box7").value;
    var bx8 = document.getElementById("box8").value;

    if((bx0=="x" && bx1=="x" && bx2=="x")){
        document.getElementById("result").innerText = "Player x won";
        var bx3 = document.getElementById("box3").disabled=true;
        var bx4 = document.getElementById("box4").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
        var bx6 = document.getElementById("box6").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;
        var bx8 = document.getElementById("box8").disabled=true;

    }else if((bx0=="o" && bx1=="o" && bx2=="o")){
        document.getElementById("result").innerText = "Player o won";
        var bx3 = document.getElementById("box3").disabled=true;
        var bx4 = document.getElementById("box4").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
        var bx6 = document.getElementById("box6").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;
        var bx8 = document.getElementById("box8").disabled=true;
    }



    if((bx3=="x" && bx4=="x" && bx5=="x")){
        document.getElementById("result").innerText = "Player x won";
        var bx0 = document.getElementById("box0").disabled=true;
        var bx1 = document.getElementById("box1").disabled=true;
        var bx2 = document.getElementById("box2").disabled=true;
        var bx6 = document.getElementById("box6").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;
        var bx8 = document.getElementById("box8").disabled=true;

    }else if((bx3=="o" && bx4=="o" && bx5=="o")){
        document.getElementById("result").innerText = "Player o won";
        var bx0 = document.getElementById("box0").disabled=true;
        var bx1 = document.getElementById("box1").disabled=true;
        var bx2 = document.getElementById("box2").disabled=true;
        var bx6 = document.getElementById("box6").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;
        var bx8 = document.getElementById("box8").disabled=true;
    }



    if((bx6=="x" && bx7=="x" && bx8=="x")){
        document.getElementById("result").innerText = "Player x won";
        var bx0 = document.getElementById("box0").disabled=true;
        var bx1 = document.getElementById("box1").disabled=true;
        var bx2 = document.getElementById("box2").disabled=true;
        var bx3 = document.getElementById("box3").disabled=true;
        var bx4 = document.getElementById("box4").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;

    }else if((bx6=="o" && bx7=="o" && bx8=="o")){
        document.getElementById("result").innerText = "Player o won";
        var bx0 = document.getElementById("box0").disabled=true;
        var bx1 = document.getElementById("box1").disabled=true;
        var bx2 = document.getElementById("box2").disabled=true;
        var bx3 = document.getElementById("box3").disabled=true;
        var bx4 = document.getElementById("box4").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
    }



    if((bx0=="x" && bx3=="x" && bx6=="x")){
        document.getElementById("result").innerText = "Player x won";
        var bx1 = document.getElementById("box1").disabled=true;
        var bx2 = document.getElementById("box2").disabled=true;
        var bx4 = document.getElementById("box4").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;
        var bx8 = document.getElementById("box8").disabled=true;

    }else if((bx0=="o" && bx3=="o" && bx6=="o")){
        document.getElementById("result").innerText = "Player o won";
        var bx1 = document.getElementById("box1").disabled=true;
        var bx2 = document.getElementById("box2").disabled=true;
        var bx4 = document.getElementById("box4").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;
        var bx8 = document.getElementById("box8").disabled=true;
    }




    if((bx1=="x" && bx4=="x" && bx7=="x")){
        document.getElementById("result").innerText = "Player x won";
        var bx0 = document.getElementById("box0").disabled=true;
        var bx2 = document.getElementById("box2").disabled=true;
        var bx3 = document.getElementById("box3").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
        var bx6 = document.getElementById("box6").disabled=true;
        var bx8 = document.getElementById("box8").disabled=true;

    }else if((bx1=="o" && bx4=="o" && bx7=="o")){
        document.getElementById("result").innerText = "Player o won";
        var bx0 = document.getElementById("box0").disabled=true;
        var bx2 = document.getElementById("box2").disabled=true;
        var bx3 = document.getElementById("box3").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
        var bx6 = document.getElementById("box6").disabled=true;
        var bx8 = document.getElementById("box8").disabled=true;
    }




    if((bx2=="x" && bx5=="x" && bx8=="x")){
        document.getElementById("result").innerText = "Player x won";
        var bx0 = document.getElementById("box0").disabled=true;
        var bx1 = document.getElementById("box1").disabled=true;
        var bx3 = document.getElementById("box3").disabled=true;
        var bx4 = document.getElementById("box4").disabled=true;
        var bx6 = document.getElementById("box6").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;

    }else if((bx2=="o" && bx5=="o" && bx8=="o")){
        document.getElementById("result").innerText = "Player o won";
        var bx0 = document.getElementById("box0").disabled=true;
        var bx1 = document.getElementById("box1").disabled=true;
        var bx3 = document.getElementById("box3").disabled=true;
        var bx4 = document.getElementById("box4").disabled=true;
        var bx6 = document.getElementById("box6").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;
    }




    if((bx0=="x" && bx4=="x" && bx8=="x")){
        document.getElementById("result").innerText = "Player x won";
        var bx1 = document.getElementById("box1").disabled=true;
        var bx2 = document.getElementById("box2").disabled=true;
        var bx3 = document.getElementById("box3").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
        var bx6 = document.getElementById("box6").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;

    }else if((bx0=="o" && bx4=="o" && bx8=="o")){
        document.getElementById("result").innerText = "Player o won";
        var bx1 = document.getElementById("box1").disabled=true;
        var bx2 = document.getElementById("box2").disabled=true;
        var bx3 = document.getElementById("box3").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
        var bx6 = document.getElementById("box6").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;

    }


    
    if((bx2=="x" && bx4=="x" && bx6=="x")){
        document.getElementById("result").innerText = "Player x won";
        var bx0 = document.getElementById("box0").disabled=true;
        var bx1 = document.getElementById("box1").disabled=true;
        var bx3 = document.getElementById("box3").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;
        var bx8 = document.getElementById("box8").disabled=true;

    }else if((bx2=="o" && bx4=="o" && bx6=="o")){
        document.getElementById("result").innerText = "Player o won";
        var bx0 = document.getElementById("box0").disabled=true;
        var bx1 = document.getElementById("box1").disabled=true;
        var bx3 = document.getElementById("box3").disabled=true;
        var bx5 = document.getElementById("box5").disabled=true;
        var bx7 = document.getElementById("box7").disabled=true;
        var bx8 = document.getElementById("box8").disabled=true;
    }

    else if(
        (bx0 == "x" || bx0 == "o")&&
        (bx1 == "x" || bx1 == "o")&&
        (bx2 == "x" || bx2 == "o")&&
        (bx3 == "x" || bx3 == "o")&&
        (bx4 == "x" || bx4 == "o")&&
        (bx5 == "x" || bx5 == "o")&&
        (bx6 == "x" || bx6 == "o")&&
        (bx7 == "x" || bx7 == "o")&&
        (bx8 == "x" || bx8 == "o")
    ){
        document.getElementById("result").innerText = "Match Tie" ;
    }
}

function resetBtn(){
    location.reload()
}