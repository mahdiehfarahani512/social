const facebookEl=document.getElementById("facebook");
const youtubeEl=document.getElementById("youtube");
const twitterEl=document.getElementById("twitter");
const linkedinEl=document.getElementById("linkedin");
const socialEl=document.getElementById("social");
const textsocialEl=document.getElementById("textsocial");
const flashEl=document.getElementById("flash");
const listsocialEl=document.getElementById("listsocial");

socialEl.addEventListener("click",()=>{
    listsocialEl.classList.toggle("hidden")
    flashEl.classList.toggle("rotate")
});

facebookEl.addEventListener("click",()=>{
textsocialEl.classList.remove("social");
textsocialEl.innerHTML=facebookEl.innerHTML;
listsocialEl.classList.add("hidden")
});
youtubeEl.addEventListener("click",()=>{
textsocialEl.classList.remove("social");
textsocialEl.innerHTML=youtubeEl.innerHTML;
listsocialEl.classList.add("hidden")
});
twitterEl.addEventListener("click",()=>{
textsocialEl.classList.remove("social");
textsocialEl.innerHTML=twitterEl.innerHTML;
listsocialEl.classList.add("hidden")
});
linkedinEl.addEventListener("click",()=>{
textsocialEl.classList.remove("social");
textsocialEl.innerHTML=linkedinEl.innerHTML;
listsocialEl.classList.add("hidden")
});
