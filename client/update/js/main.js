
// Navabr backgorund when screen is scrolled
let abc = document.querySelector(".navbar");
console.log(abc);
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        abc.classList.add("header-scrolled");
    }else{
        abc.classList.remove("header-scrolled");
    }    
}


// to close the navabr stream

let temp = document.querySelectorAll(".nav-link");;
let navCollapse =document.querySelector(".navbar-collapse.collapse");
temp.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

var counter = 0;
function readmore_function(part){
    // console.log(part + counter++ );
    var moretext = document.getElementById(part + "-more");
    var btn = document.getElementById(part + "-btn");

    if(moretext.style.display == "none"){
        btn.innerHTML = "Read less";
        moretext.style.display = "inline";
    }else{
        btn.innerHTML = "Read more";
        moretext.style.display = "none";
    }
}

// let c = 1;
// let temp1 = document.querySelector(".navbar-toggler");;
// const div = document.querySelector('#navbarNav');
// temp1.addEventListener("click", function(){
//     console.log(c++);
//     if(div.classList.contains('show')){
//         console.log('true');
//         div.classList.remove('show');
//         console.log(div.classList.contains('show'));
//     }
//     else{
//         console.log('true');
//         div.classList.add('show');
//     }
// } )
