const express = require("express")
const app = express()

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = 3000

router.get('/max', (req, res) => {
    res.send("Hello? Can you hear me?")
})
router.get('/', (req, res) => {
    res.redirect("https://youtu.be/dQw4w9WgXcQ?si=6h9x8RL3_JfnP125")
})

app.listen(port, ()=>{
    console.log('Server started')
})