let displayForAll;
let displayNotif=1;
let inputContainer = document.querySelector('.inputContainer');
let textInput = inputContainer.querySelector('input[type="text"]');
let copyNotif = document.querySelector('.copyNotif');
let timerNotif;
let currentLink = 0;

function hideContainer(){
    inputContainer.style.display='none';
}

function showGithub(){
    displayNotif=1;
    copyNotif.style.display='none'
    currentLink = 1;
    if (displayForAll==1)
    {
        textInput.value = 'https://github.com/VhanTakishima';
        inputContainer.style.display='flex';
        displayForAll = 0;

    } 
    else
    {
    hideContainer();
        displayForAll=1;
        textInput.value = ' ';
        
    }
}

function showFB(){
    displayNotif=1;
    copyNotif.style.display='none'
    currentLink = 2;
    if (displayForAll==1)
    {
        textInput.value = 'https://www.facebook.com/VhanTakishima';
        inputContainer.style.display='flex';
        displayForAll = 0;
        

    } 
    else
    {
        hideContainer();
        displayForAll=1;
        textInput.value = ' ';
    }
}
function showLinkedIn(){
    displayNotif=1;
    copyNotif.style.display='none'
    currentLink = 3;
    if (displayForAll==1)
    {
        textInput.value = 'https://www.linkedin.com/in/vhantakishima/';
        inputContainer.style.display='flex';
        displayForAll = 0;
        

    } 
    else
    {
        hideContainer();
        displayForAll=1;
        textInput.value = ' ';
    }
}

function showGmail(){
    displayNotif=1;
    copyNotif.style.display='none'
    currentLink = 4;
    if (displayForAll==1)
    {
        textInput.value = 'vhantakishima@gmail.com';
        inputContainer.style.display='flex';
        displayForAll = 0;

    } 
    else
    {
        hideContainer();
        displayForAll=1;
        textInput.value = ' ';
    }
}



    
function copyToClipboard(){
        //Notif Test
        if(displayNotif===1){
            copyNotif.style.display='flex'
            displayNotif=0;
        }

        // Select the text input
        const textToCopy = document.querySelector('.linkClipboard');

        // testing Copy 
        textToCopy.select();
        document.execCommand('copy');
        // Deselect to clean the textbox
        textToCopy.setSelectionRange(0, 0);
}

function goToLink() {
    if (currentLink === 1) {
        openInNewTab('https://github.com/VhanTakishima');
    } else if (currentLink === 2) {
        openInNewTab('https://www.facebook.com/VhanTakishima');
    } else if (currentLink === 3) {
        openInNewTab('https://www.linkedin.com/in/vhantakishima/');
    } else if (currentLink === 4) {
        openInNewTab('mailto:vhantakishima@gmail.com');
    } else {
        console.log("currentLinkID not Found");
    }
}

function openInNewTab(url) {
    const newTab = window.open(url, '_blank');
    if (newTab) {
        newTab.focus();
    }
}

     

