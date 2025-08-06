import express from "express"
// const express = require("express")
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
// const notesRoutes = require("./routes/notesRoutes.js")
import dotenv from "dotenv";

dotenv.config();



const app = express()
const PORT = process.env.PORT || 5001;
connectDB()

app.use("/api/notes", notesRoutes);



app.listen(PORT, () => {
    console.log('server started on port :', PORT);
})

//mongodb+srv://mdsaadmanfuad:<db_password>@cluster0.mjyetpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0