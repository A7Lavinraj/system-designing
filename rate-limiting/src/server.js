import express from "express";

const PORT = process.env.PORT || 3000;
const REQUEST_LIMIT = process.env.REQUEST_LIMIT || 10
const REQUEST_TIMEOUT_MS = process.env.REQUEST_TIMEOUT_MS || 5000

const app = express();

const IPRequestCount = {};

app.use((req, res, next) => {
  if (IPRequestCount[req.ip] === REQUEST_LIMIT) {
    console.log(`[Express] Request blocked for IP: ${req.ip}`);
    return res.status(403).json({ message: "Limit reached" });
  } else {
    IPRequestCount[req.ip] = (IPRequestCount[req.ip] || 0) + 1;
    setTimeout(() => {
      IPRequestCount[req.ip]--;

      if (IPRequestCount[req.ip] <= 0) {
        delete IPRequestCount[req.ip];
      }
    }, REQUEST_TIMEOUT_MS)
  }

  console.log(`[Express] Request allowed for IP: ${req.ip}`);
  next();
})

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(PORT, () => {
  console.log("[Express] listing");
})
