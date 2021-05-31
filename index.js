const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const cors = require('cors');
const axios = require('axios');
app.use(cors());
app.get('/',() => {
    res.json('status ok');
})

app.get('/url', async (req,res) => {
    const targetUrl = Object.values(req.query)[0];
    try {
        const responseFromTarget = await axios.get(targetUrl);
        if(responseFromTarget){
            res.status(200).json(responseFromTarget.data);
        }else {
            res.status(404);
        }
    }catch (err) {
        res.status(404).json('Something wrong');
    }
})


app.listen(port, () => {
    console.log(`app listening on http://localhost${port === 80 ? '' : ':' + port}`)
})
