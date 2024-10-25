const express = require("express");
const app = express();
const os = require("os");
const morgan = require("morgan");

const port = process.env.PORT || 4000;

// Add middleware
app.use(morgan("combined"));
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/", (req, res) => {
  res.send(`[${new Date().toISOString()}] Received request on ${os.hostname} from ${req.ip}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on ${os.hostname} at port ${port}`);
});
