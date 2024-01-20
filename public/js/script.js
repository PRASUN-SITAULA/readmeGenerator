document.querySelector('.btn').addEventListener('click', async function (){
    const project_description = document.getElementById('description').value
    const project_language = document.getElementById('language').value

  // Create an object to hold the data
  const requestData = {
    description: project_description,
    language: project_language,
  };

  // Fetch API to send a POST request to the server
  fetch('/generate-readme', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
  .then(response => {
    if (!response.ok) {
      console.log(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (data.success) {
      const displayContainer = document.querySelector('.display-container')
      displayContainer.textContent = data

      fetch('/', (req, res) => {
        method: 'GET'
      })
    } else {
      // Display an error message
      alert('Error generating README:\n\n' + data.error);
    }
  })
  .catch(error => {
    console.error('Error:', error);

    // Display a generic error message
    alert('An error occurred while generating README.');
  });
})

