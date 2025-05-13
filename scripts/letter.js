let myImage = document.querySelector("img");



document.querySelector("html").addEventListener("click", function(){console.log("j'ai cliqué")} );

myImage.addEventListener("click",function()
{
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "../images/paper1.jpeg"){
         console.log("changemen pour image 2");
        myImage.setAttribute("src","../images/paper2.jpg");
       
    }else{
        myImage.setAttribute("src","../images/paper1.jpeg");
    }
});


