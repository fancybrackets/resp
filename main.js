// normalde alttaki işlevi jQuery ile yapmıştı ama aşağıdaki tamamen aynı işlevde : 
let obj = document.getElementById("menu") ; 
let i = 0 ; 
let header = document.getElementsByTagName("header");
let x = true ; 
obj.addEventListener("click" , function(){



  if(i == 1 && x) {
  obj.setAttribute("class" , "fas fa-bars") ; 
  header[0].style.left = "-100%" ; 
  i-- ; 
}
else {
    obj.setAttribute("class" , "fa-solid fa-xmark") ; 
    header[0].style.left = "0" ; 
    if(x == false){
    i = 1
    x = true ;   
  }
    else {
      i++ ; 
    }


}  


});


if(window.innerWidth < 991)  {

let headerMenu  = document.getElementsByTagName("li");

for( let i = 0 ; i<=4 ; i++){
  headerMenu[i].addEventListener("click" , function() {
    header[0].style.left = "-100%" ; 
    obj.setAttribute("class" , "fas fa-bars") ; 
    x = false ; 
  });
}
}

// NOT : en son yaptığımız işlem : soldaki menülerden herhangi birine tıkladığımızda yüksek genişliklerde header'ın kapanmamasını istiyorum ! 