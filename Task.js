var allCirRight = document.querySelectorAll(".rightCircle")
var allCirLeft = document.querySelectorAll(".leftCircle")
function circle1(){
    allCirRight[0].style.transform = "translate(-164vh)"
    allCirRight[1].style.transform = "translate(0vh)"
    allCirRight[2].style.transform = "translate(0vh)"

    allCirLeft[0].style.backgroundColor = "green"
    allCirLeft[1].style.backgroundColor = "red"
    allCirLeft[2].style.backgroundColor = "red"
}
function circle2(){
    allCirRight[0].style.transform = "translate(0vh)"
    allCirRight[1].style.transform = "translate(-164vh)"
    allCirRight[2].style.transform = "translate(0vh)"

    allCirLeft[0].style.backgroundColor = "red"
    allCirLeft[1].style.backgroundColor = "green"
    allCirLeft[2].style.backgroundColor = "red"
}
function circle3(){
    allCirRight[0].style.transform = "translate(0vh)"
    allCirRight[1].style.transform = "translate(0vh)"
    allCirRight[2].style.transform = "translate(-164vh)"

    allCirLeft[0].style.backgroundColor = "red"
    allCirLeft[1].style.backgroundColor = "red"
    allCirLeft[2].style.backgroundColor = "green"
}
function reset(){
    allCirRight[0].style.transform = "translate(0vh)"
    allCirRight[1].style.transform = "translate(0vh)"
    allCirRight[2].style.transform = "translate(0vh)"

    allCirLeft[0].style.backgroundColor = "red"
    allCirLeft[1].style.backgroundColor = "red"
    allCirLeft[2].style.backgroundColor = "red"
}