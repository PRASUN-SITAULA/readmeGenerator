const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios');

require('dotenv').config()
const apiKey = process.env.API_SECRET_KEY

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/');
});


app.post('/generate-readme', (req, res) => {
  const program_description = req.body.description;
  const program_language = req.body.language;

  

  const generateReadme = async (description, language) =>{
    
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-0613",
            stop: null,
            prompt: `Write a README file based on ${description} for ${language} programming language with the title of the readme in center and features in bullet points.Also include badges based on language.`,
            max_tokens: 7, 
        }),
      });
      const data = await response.json()
      console.log(data)
    //   const readmeContent = data.choices[0].message.content;
    // res.send({ success: true, readmeContent: generatedReadme });
  }
  generateReadme(program_description, program_language)
  res.send('README generated successfully!');
});









app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
