const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

 // Store the triggered events
 window.deferredPrompt = event;

 // Remove the hidden class from the button.
 butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {

const promptEvent = window.deferredPrompt;

if (!promptEvent) {
return;
}

promptEvent.prompt();


window.deferredPrompt = null;

butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {

window.deferredPrompt = null;
}); 

