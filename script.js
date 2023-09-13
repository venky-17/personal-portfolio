const tabBtns = document.querySelectorAll('.tabBtns');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');
const defaultActiveTabId = 'aboutTab';
const themeBtn = document.querySelector('.theme')
const themeIcon = document.querySelector('.theme i');

const handleTabClick = (event) => {
  const id = event.currentTarget.id;
  console.log(id);

  // Hide all tab panels
  tabPanels.forEach(function (panel) {
    panel.hidden = true; 
  });

  // Remove the .active class from all tab buttons
  tabBtns.forEach(function (button) {
    button.classList.remove('active');
    button.setAttribute('aria-selected', 'false');
  });

  // Add the .active class and set aria-selected for the active tab button
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
    } else {
      themeIcon.className = "fa fa-sun-o"; 
    }
  
    console.log("Dark mode toggled:", isDarkMode);
    console.log("Icon class:", themeIcon.className);
  });
  
  


