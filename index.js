let sidebar = document.getElementById("sidebar");
let container = document.getElementById("container")

const openSidebar = () => {
  let containerWidth = document.body.clientWidth - 250
  sidebar.style.display = "block";
  document.body.style.overflow = "hidden"
  container.style.width = containerWidth + "px"
};

const closeSidebar = () => {
  let containerWidth = document.body.clientWidth
  sidebar.style.display = "none";
  document.body.style.overflow = "auto"
  // container.style.width = container + "px"
};

if(document.body.clientWidth > 900){
  openSidebar()
}else{
  closeSidebar()
}