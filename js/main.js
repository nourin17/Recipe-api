var recipeList = [];
var navLinks=document.querySelectorAll(".nav-link");
var items=document.querySelectorAll(".item");
for(var i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener("click",function(event){
        var category=event.target.getAttribute("recipe");
        getData(category);
    })
}
// for(var i=0;i<items.length;i++){
//     items[i].addEventListener("click",function(event){
//         var category=event.target.getAttribute("recipe");
//         getData(category);
//     })
// }
var myHttp = new XMLHttpRequest();
function getData(category){
myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${category}`);
myHttp.send();
myHttp.addEventListener("readystatechange", function () {
    if (myHttp.status == 200 && myHttp.readyState == 4) {
        recipeList = JSON.parse(myHttp.response).recipes;
        display();
    }
});}
function display() {
    var temp = "";
    for (var i = 0; i < recipeList.length; i++) {
        temp += `
        <div class="col-md-3">
        <div class="item border rounded p-2">
            <img src="${recipeList[i].image_url}" class="w-100">
            <h3>${recipeList[i].title}</h3>
            <p>${recipeList[i].recipe_id}</p>
            </div> </div>`
    }
    document.getElementById("reciperow").innerHTML=temp;
}
getData("pizza");
function getDetails(id){
var myHttp2=new XMLHttpRequest();
myHttp2.open(`GET","https://forkify-api.herokuapp.com/api/get?rId=${id}`);
myHttp2.send();
myHttp2.addEventListener("readystatechange",function(){
    if(myHttp2.status==200 && myHttp2.readyState==4){
        recipeList=JSON.parse(myHttp2.response).recipes;
        display();
    }
});
getData();
}
// var person={
//     name:"ahmed",
//     salary:3000,
//     calcSalary:function(){
//         let calcTax=()=>{
//             return this.salary*0.10;
//         }
//         return this.salary+calcTax();
//     }
// }
// var result=person.calcSalary();
// console.log(result);