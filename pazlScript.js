var kellekord="pilti/1.png";


var pilti11=document.getElementById("pilti11");
var pilti12=document.getElementById("pilti12");
var pilti13=document.getElementById("pilti13");
var pilti14=document.getElementById("pilti14");
var pilti15=document.getElementById("pilti15");
var pilti16=document.getElementById("pilti16");
var pilti17=document.getElementById("pilti17");
var pilti18=document.getElementById("pilti18");
var pilti19=document.getElementById("pilti19");
var lopp=false;
function kartinka(pilt){
    pilt.src=kellekord;

    if(vyidukontroll()){
        alert("Sa võtsid!");
        lopp=true;
    }

    /*if(kellekord=="pildid/x.png"){
        kellekord="pildid/0.png";
    }else{
        kellekord="pildid/x.png";
    }*/
    if(ruududKasutatud()){
        lopp=true;
        alert("Ты собрал!");
    }

}
function kartinkaValik(pilt){
    kellekord=pilt.src;
    document.getElementById("pilt11").src=kellekord;

}

// проверяет все картинки и возвращает false если найдёт пустую картинку

function ruududKasutatud(){
    pildid=document.images;
    for(var i=0;i<pildid.length; i++){
        if(pildid[i].src.split("/").pop()=="pustoi.png"){
            return false;
            //split("/") - делает массив из пути к файлу
            //pop() - выбирает из массива последнее значение или имя файла
        }
    }
    return true;
}


// определяем имя файла
function sisu(nr){
    var fnimi=document.getElementById("pilti"+nr).src;
    fnimi=fnimi.split("/").pop();
    return fnimi;
}
function kontrollsisu(a,b,c, sisulopp){
    //a,b,c - номера картинок и sisulopp - адрес нужной картинки
    if(sisu(a)==sisulopp.split("/").pop() && sisu(b)==sisulopp.split("/").pop() && sisu(c)==sisulopp.split("/").pop())
    {return true;}else {return false;}

}
function vyidukontroll(){
    if(document.getElementById("pilti11")){
        document.getElementById("pilti11").style.visibility = 'hidden';
    }


    return false;

}

/*На всякий случай https://pastebin.com/J6YGnpXP*/