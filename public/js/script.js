document.querySelector('.btn').addEventListener('click', async function (){
    const project_description = document.getElementById('description').value
    const project_language = document.getElementById('language').value

  // Create an object to hold the data
  const requestData = {
    description: project_description,
    language: project_language,
  };

  // Fetch API to send a POST request to the server
  await fetch('/generate-readme', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
})

