import express from 'express';
import 'dotenv/config';
import router from './routes';


const app = express();
const port = parseInt(process.env.SERVER_PORT);
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})