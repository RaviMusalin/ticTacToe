import express from "express"
import cors from "cors"
import { StreamChat } from "stream-chat"
import { v4 as uuidv4 } from "uuid"
import bcrypt from "bcrypt"
const app = express()

app.use(cors())
app.use(express.json())
const api_key = "at8wbar958ur"
const api_secret = "7bjqym7gd8vnd6vr6c8fqga2rtkv4wwubagf6rgn7c5hv2th28bst947bafrpgs5"
const serverClient = StreamChat.getInstance(api_key, api_secret)

app.post("/signup" , async (req,res) => {
    try {
    const {firstName, lastName, userName, password} = req.body
    const userId = uuidv4()
    const hashedPassword = await bcrypt.hash(password, 10)
    const token = serverClient.createToken(userId)
    res.json({token, userId, firstName, lastName, userName, hashedPassword})
    } catch(error) {
        res.json(error)
    }
})

app.post("/login")

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})
