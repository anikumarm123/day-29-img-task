var element_1= document.createElement('div');
var element_2= document.createElement('img');
var element_3= document.createElement('button');
var element_4=  document.createElement('button');
element_1.append(element_2,element_3,element_4);

element_1.setAttribute('class','hero');
element_2.setAttribute('class','flx');

element_3.setAttribute('class','btn');
element_4.setAttribute('class','btn');
//element_1.className = 'hero'

element_2.src='item-6.jpg';
element_3.textContent = 'Increase Button';
element_4.textContent = 'Decrease Button';

element_3.setAttribute('onclick','funIncrease()');
var a;
function funIncrease(){
    a = element_2.clientWidth;
    console.log(a);
    element_2.style.width = a + 10 +'px';
}

element_4.setAttribute('onclick','funDecrease()');
function funDecrease(){
    element_2.style.width = a - 10 +'px';
    funIncrease();
}

document.body.append(element_1);


   