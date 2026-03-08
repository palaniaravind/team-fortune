const axios = require("axios");

module.exports = async (req, res) => {

const question = req.body.question;

try{

const response = await axios.post(
"https://api.openai.com/v1/chat/completions",
{
model: "gpt-4o-mini",
messages:[
{
role:"system",
content:"You are an expert agriculture AI assistant helping farmers."
},
{
role:"user",
content:question
}
]
},
{
headers:{
Authorization:`Bearer ${process.env.OPENAI_API_KEY}`
}
}
);

res.json({
answer:response.data.choices[0].message.content
});

}catch(error){
res.status(500).json({error:"AI error"});
}

};