const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const loginButton = document.getElementById('loginButton');

        emailInput.addEventListener('input', validateForm);
        passwordInput.addEventListener('input', validateForm);

        loginButton.addEventListener('mouseover', function() {
            if (loginButton.disabled) {
                const randomX = Math.floor(Math.random() * 300);
                const randomY = Math.floor(Math.random() * 300);
                loginButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
            }
        });

        function validateForm() {
            if (emailInput.value && passwordInput.value) {
                loginButton.disabled = false;
                loginButton.style.transform = 'translate(0, 0)';
            } else {
                loginButton.disabled = true;
            }
        }