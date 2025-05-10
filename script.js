
function login() {
  const id = document.getElementById('userId').value.trim();
  const pass = document.getElementById('password').value.trim();
  if (id === 'demoUser' && pass === 'Willian456') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid Online ID or Passcode');
  }
}
