import express, { json } from "express";
import { cardsData } from "./data.js";
import cors from "cors";
import sendNotificationFunc from "./sendNotificationFunc.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000; // Define the port number the server will listen on

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/titles", (req, res) => {
  res.json(cardsData);
});

app.post("/clicked", async (req, res) => {
  const { id, token } = req.body;
  try {
    const result = await sendNotificationFunc(id, token);
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
