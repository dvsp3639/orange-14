const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));



// ✅ Express 5 SPA fallback (correct fix)
// app.get(/.*/, (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.get("/payment", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "payment.html"));
});
// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
