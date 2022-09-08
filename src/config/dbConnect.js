import mongoose from "mongoose";
mongoose.connect("mongodb+srv://kelly:kelly@nodejs-mongodb.fbmf2xw.mongodb.net/nodejs-mongodb");

export default mongoose.connection;