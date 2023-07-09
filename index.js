window.onload = function () {
  Particles.init({
    selector: ".background",
    connectParticles: false,
  });
};

document.getElementById('submit').addEventListener('click', () => {

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(username.length === 0 || password.length === 0) {
      alert("Enter a mock username and password.");
      return false;
    } else {
      document.getElementById('email').value = "";
      document.getElementById('password').value ="";

      console.log(username, password);

    
      const mainContent = document.getElementById('mainContainer');
      const logoutButton = document.getElementById('logoutContent');
      const loadDataButton = document.getElementById('loadData');
    
      mainContent.classList.toggle('signedIn');
      logoutButton.classList.toggle('signedIn');
      loadDataButton.classList.toggle('signedIn');

      document.getElementById('user').innerHTML = `Welcome ${username}!`
    }
})

document.getElementById('return').addEventListener('click', () => {
    const mainContent = document.getElementById('mainContainer');
    const logoutButton = document.getElementById('logoutContent');
    const loadDataButton = document.getElementById('loadData');

    
    mainContent.classList.toggle('signedIn');
    logoutButton.classList.toggle('signedIn');
    loadDataButton.classList.toggle('signedIn');

})