const tabBtns = document.querySelectorAll('.tabBtns');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');
const defaultActiveTabId = 'aboutTab';
const themeBtn = document.querySelector('.theme')
const themeIcon = document.querySelector('.theme i');

const handleTabClick = (event) => {
  const id = event.currentTarget.id;
  console.log(id);


  tabPanels.forEach(function (panel) {
    panel.hidden = true; 
  });

  tabBtns.forEach(function (button) {
    button.classList.remove('active');
    button.setAttribute('aria-selected', 'false');
  });


  event.currentTarget.classList.add('active');
  event.currentTarget.setAttribute('aria-selected', "true");

  const tabPanel = document.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;


 

};

tabBtns.forEach((button) => button.addEventListener('click', handleTabClick));

const defaultActiveTabButton = document.getElementById(defaultActiveTabId);
defaultActiveTabButton.classList.add('active');
defaultActiveTabButton.setAttribute('aria-selected', 'true');
  
themeBtn.addEventListener('click', () => {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode'); 
  

    body.classList.toggle("dark-mode");
  
   
    if (isDarkMode) {
      themeIcon.className = "fa fa-moon-o";
      localStorage.setItem("theme","dark")
    } else {
      themeIcon.className = "fa fa-sun-o"; 
      localStorage.setItem("theme","light")
    }
  



  });
  
   
const setTheme = () => {
  const body = document.body;

  const isLightMode = body.classList.contains('!dark-mode'); 

  let selectedTheme = localStorage.getItem("theme")
  console.log(selectedTheme);


if(selectedTheme==="light"){
  body.classList.add("dark-mode")
  themeIcon.className = "fa fa-sun-o"
  
} else{
  
  body.classList.remove("dark-mode")
  themeIcon.className = "fa fa-moon-o"
  
}


   
}



window.addEventListener('load', setTheme)




