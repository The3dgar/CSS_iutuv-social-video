let sidebar = document.getElementById("sidebar");

const openSidebar = () => {
  sidebar.style.display = "block";
  document.body.style.overflow = "hidden"

};

const closeSidebar = () => {
  sidebar.style.display = "none";
  document.body.style.overflow = "auto"
};

if(document.body.clientWidth > 900){
  openSidebar()
}else{
  closeSidebar()
}