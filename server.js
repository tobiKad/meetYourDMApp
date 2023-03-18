const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Check the email and password against your database or other authentication system
  // If they are valid, generate a JSON Web Token (JWT) to send back to the client
  const token = generateToken(email);
  res.json({ token });
});

function generateToken(email) {
  // Generate a JWT with an expiration time, using a library like jsonwebtoken
  // For example:
  const jwt = require('jsonwebtoken');
  const token = jwt.sign({ email }, 'secret-key', { expiresIn: '1h' });
  return token;
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
