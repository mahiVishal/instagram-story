var arr = [
  {
    dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://images.unsplash.com/photo-1529680459049-bf0340fa0755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://images.unsplash.com/photo-1529680459049-bf0340fa0755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://images.unsplash.com/photo-1529680459049-bf0340fa0755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://images.unsplash.com/photo-1529680459049-bf0340fa0755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
];

var storiya = document.querySelector("#storiya");
var clutter = "";
arr.forEach(function (ele, idx) {
  clutter += ` <div class="story">

    <img id="${idx}" src="${ele.dp} ">

</div>
`;
});

storiya.innerHTML = clutter;

storiya.addEventListener("click", function (dets) {
  console.log(arr[dets.target.id].story);
  document.querySelector(".full-screen").style.display = "block"
  document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
  setTimeout(function(){
    document.querySelector(".full-screen").style.display = "none"
  },3000)
});

const post = document.querySelector(".post")
const iike = document.querySelector(".post i")

post.addEventListener("dblclick",function(){
  iike.style.transform = "translate(-50%,-50%) scale(1)";
  iike.style.opacity = 0.8

  setTimeout(function(){
    iike.style.opacity = 0;
 },1000)

 setTimeout(function(){
  iike.style.transform = "translate(-50%,-50%) scale(0)";  
 },2000)

})
