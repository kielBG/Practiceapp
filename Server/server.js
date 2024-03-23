import express  from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.get(`/api/tasks`, async (req, res) => {
    try {
        res.send('hit');
    } 
    catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log('listening on port', port)
});