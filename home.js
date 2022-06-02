
/*
@Copyright - 2022 PepepeFactory
I know no one will use this program even 
if I don't write it, but it's interesting, so I'll write it.
*/

document.addEventListener("DOMContentLoaded",x =>{
  const NEWS = document.querySelector(".header-news");

  NEWS.addEventListener("click", x =>{
    history.pushState('', "NEWS", "../../news/index.html");
  });
});