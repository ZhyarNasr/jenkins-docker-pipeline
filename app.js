const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline successful!');
});

// Export for testing
module.exports = app; 

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}