document.getElementById("buyButton").addEventListener("click", function(e){
  e.preventDefault();
  alert("Configure aqui o checkout oficial do produto.");
});
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    const target=document.querySelector(link.getAttribute("href"));
    if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"});}
  });
});