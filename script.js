const apiKey = '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'
const apiUrl = 'https://api.openai.com/v1/chat/completions'

document.querySelector('.btn').addEventListener('click', function (){
    const project_description = document.getElementById('description').value
    const project_language = document.querySelector('#language').value
})

const generateReadme = async () =>{
    
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "",
            prompt: "",
            max_tokens: 7, 
        }),
      });
      const data = await response.json()
      const readmeContent = data.choices[0].message.content;
}



