var arr1 =[];
var arr2 =[];
var arr3 =[];
var num1;
var num2;
var num3;
var num3_img
for(let i=0; i<=9; i++){
    (function(i){
    dg1 = '#digit1_' + i ;
    arr1.push(document.querySelector(dg1));
    arr1[i].addEventListener('click',function(){
        calculate(i);
        contain1(i);
        update();
       document.querySelector('.a').innerHTML=showon_img();
        for(let i=0; i<=9; i++){
            arr1[i].style.backgroundColor = null
        }
        arr1[i].style.backgroundColor ='#ffda16'
    })
    }(i));
}
for(let i=0;i<=9;i++){
    (function(i){
    dg2 = "#digit2_" + i ;
    arr2.push(document.querySelector(dg2));
    arr2[i].addEventListener('click',function(){
        calculate(i);
        contain2(i)
        update();
        document.querySelector('.a').innerHTML=showon_img();
        for(let i=0; i<=9; i++){
            arr2[i].style.backgroundColor = null
        }
        arr2[i].style.backgroundColor ='#ffda16'
    })
    }(i));
}
for(let i=0; i<=9; i++){
    (function(i){
    dg3 = "#digit3_" + i;
    arr3.push(document.querySelector(dg3));
    arr3[i].addEventListener('click',function(){
       calculate(i);
       contain3(i);
       update();
       contian3for_img(i);
       document.querySelector('.a').innerHTML=showon_img();
       for(let i=0; i<=9; i++){
        arr3[i].style.backgroundColor = null
     }
    
    arr3[i].style.backgroundColor ='#ffda16'
    })
    }(i));
}
function calculate (a){
    console.log(a)
}
function contain1(collum1){
    num1= collum1.toString();
}
function contain2(collum2){
    num2= collum2.toString();
}
function contain3(collum3){
    num3= 10**(collum3);
}
function contian3for_img(img){
     num3_img = img.toString();
}
function update(){
    x=Number(num1+num2)
    var result = x*num3;
    console.log(result);
    document.querySelector('#result').innerHTML=result+" &Omega;"
}
function showon_img(){
    return num1+num2+num3_img;
}