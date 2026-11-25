(function(){
  var doc=document.documentElement;
  doc.classList.add("js");
  var BP=768;
  var burger=document.querySelector(".burger");
  var closeBtn=document.querySelector(".mob-close");
  var overlay=document.querySelector(".mob-overlay");
  function setMenu(open){
    doc.classList.toggle("menu-open",open);
    doc.style.overflow=open?"hidden":"";
    if(burger){burger.setAttribute("aria-expanded",open?"true":"false");}
  }
  if(burger){burger.addEventListener("click",function(){setMenu(!doc.classList.contains("menu-open"));});}
  if(closeBtn){closeBtn.addEventListener("click",function(){setMenu(false);});}
  if(overlay){overlay.addEventListener("click",function(){setMenu(false);});}
  document.addEventListener("keydown",function(e){if(e.key==="Escape"){setMenu(false);}});
  window.addEventListener("resize",function(){if(window.innerWidth>BP){setMenu(false);}});
  var qs=document.querySelectorAll(".q");
  qs.forEach(function(q){
    q.addEventListener("click",function(){
      var a=q.nextElementSibling;
      var open=q.getAttribute("aria-expanded")==="true";
      q.setAttribute("aria-expanded",open?"false":"true");
      a.style.maxHeight=open?"0px":a.scrollHeight+"px";
    });
  });
})();
