const OpenAI = require("openai");

const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()


const app = express();
const port = process.env.PORT;

const openai = new OpenAI({
  apiKey: process.env['API_SECRET_KEY'], 
});


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/css',express.static(__dirname + '/public/css'))
app.use('/js',express.static(__dirname + '/public/js'))


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', {readmeContent: ''})
});
  

app.post('/generate-readme', (req, res) => {
  const description = req.body.description
  const language = req.body.language

  const generateReadme = async (description, language) =>{
    const data = await openai.chat.completions.create({
      messages: [{ role: "system", content: `Write a README file based on ${description} for ${language} programming language with 
      the title of the readme in center and features in bullet points.Also include badges based on language.`}],
      model: "gpt-3.5-turbo-0613",
    });
    const readmeContent = data.choices[0].message.content;
    console.log(readmeContent)
  res.render('index', { readmeContent })
  }
  generateReadme(description, language)
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});