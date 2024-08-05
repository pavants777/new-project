document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 
    console.log('function called');

    const email = document.getElementById('user-email').value.trim();
    const username = document.getElementById('user-username').value.trim();
    const password = document.getElementById('user-password').value.trim();
    const confirmPassword = document.getElementById('user-password2').value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const userData = {
        email: email,
        username: username,
        password: password
    };

    console.log(userData);

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Sign Up successful!');
    window.location.href = 'index.html';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
