const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/contacts", contactRoutes);

mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "contact_management"
    })
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(process.env.PORT || 3000, () => {
            console.log(
                `Server running on port ${process.env.PORT || 3000}`
            );
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });