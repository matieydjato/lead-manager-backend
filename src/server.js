const express = require('express');
const cors = require('cors');
require('./config/db');
const leadsRouter = require('./routes/leadRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use('/leads', leadsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
