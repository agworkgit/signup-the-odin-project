function onChange() {
    const password = document.querySelector('input[name=user-password]');
    const confirm = document.querySelector('input[name=user-password-confirm]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }