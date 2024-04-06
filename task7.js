



let abc=document.querySelector(".heading1")
abc.innerHTML="Haii world";

abc.style.color="red"
abc.style.backgroundColor="grey";

let styleObject={color:'red' ,"background-Color":'yellow'};
Object.assign(abc.style, styleObject);

