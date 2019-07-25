function resetId() {
    document.getElementsByClassName("avai").id = '';
}

function setId(){
    var name = document.getElementsByClassName("avai");
    console.log("jumlah id setelah select : " + name.length )
    for (i = 0; i<name.length; i++){
        name[i].id = i+1;
    }
}


function doSomething(){
    

    setId();

    var are = [];
    are = document.getElementsByClassName('avai');
    console.log("jumlah id awal : "+are.length);

    
    var random_id = Math.floor((Math.random()*are.length)+1);
    console.log("nomor id kepilih: "+random_id);
   
   
    document.getElementById(random_id).classList.remove("avai");
    document.getElementById(random_id).style.backgroundColor="#3eb0de";

    document.getElementById(random_id).id = '';

    resetId();




}

function doReset() {
    var el = document.getElementsByTagName("li");
    console.log(el);
    for (i = 0; i<el.length; i++){
        el[i].classList.add("avai");
        el[i].style.backgroundColor="#e7f3f9";
        el[i].id = i+1;
    }
}