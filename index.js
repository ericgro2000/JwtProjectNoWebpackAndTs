const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5000'
}));

const start = async () => {
    try {
        console.log("trying")
        //await mongoose.connect(`mongodb+srv://mongoMe:0123456789@cluster0.acbnjaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("afterawait")
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log("supermegaerror")
        console.log(e)
    }
}

start()