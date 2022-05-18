import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();

app.use(cors());
app.use('/users', userRoutes)
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))


const password = "Ss7aloNlGTsrBXoR"

const CONNECTION_URL = `mongodb+srv://jpablo_2002:${password}@cluster0.qjds7.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));