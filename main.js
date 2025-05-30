// massive/array > [number, string, boolean]--> olon ytga 
//var too= 5 
var toonuud= [ "first ", 9,4, 4, 44, 4,4543, 45678  , "last ", ];
//console.log(toonuud);
//index -> utgiin bairshiliin too -> 0ees ehlene 
//console.log(toonuud[0]); //0 in hamgiin ehnii utga
//console.log(toonuud[toonuud.length-1]);//hamgiin suulin utga 
// for 
for(var i=0; i<=toonuud.length-1; i++){
    console.log(toonuud[i]);
}
var bodlogo 
console.log(bodlogo);
// hamgiin ehnii bolon hamgiin siuulin toonuudin niilber 
var tav= [3,4,4,5,6];
console.log(tav[0]+tav[tav.length-1]);
// now make -> 5ширхэг тоо агуулсан массив үүсгээд тэгш бол тэгш сондгой бол сондгой гэж гаргаж ирнэ үү
var tavv = [2, 7, 4, 9, 6]; 
for (var i = 0; i < tavv.length; i++) {
    if (tavv[i] % 2 === 0) {
        console.log(tavv[i] + " -Tegsh ");
    } else {
        console.log(tavv[i] + " - Sondgoi ");
    }
}
// 5ширхэг тоо агуулсан массив үүсгээд тэдгээрийн нийлбэр ба үржвжрийг ол
var tavvv = [6, 7, 8, 9, 1];
var niilber = 0;
var urjver = 1;

for (var i = 0; i < tavvv.length; i++) {
    niilber= niilber+tavvv[i];
    urjver= urjver*tavvv[i] ;
}

console.log("Niilber : " + niilber);
console.log("Urjver : " + urjver);
// define 
var body = document.getElementsByTagName('body')[0];
console.log(body );
var colors= ['purple','pink','red', 'orange', 'yellow', 'green', 'blue ' ];
//function
var i= -1; 
function change(){
    i++; 
    // static----> dynamic
    if(i==colors.length){
        i=0;
    }
    body.style.backgroundColor= colors[i];
    
}
function back(){
    i--;
    if(i < 0){
        i = colors.length - 1; 
    }
    body.style.backgroundColor = colors[i];
}
// setTimeout -----> func-iig her hugatsaanaa ajilhiig zaana
function hello(){
    console.log("hello");

}
setTimeout(hello,3000);
var s;
var autoBtn= document.querySelector('.autoBtn');
var stopBtn= document.querySelector('.stopBtn');
function auto(){
    i++;
    if(i==colors.length){
        i=0;
    }
    body.style.backgroundColor = colors[i];
    s=setTimeout(auto,500);
    autoBtn.disabled= true; 
    stopBtn.disabled= false;
}
function stop(){
    clearTimeout(s);
    autoBtn.disabled= false; 
    stopBtn.disabled= true ;
}
alert("This is colorChanger ")

