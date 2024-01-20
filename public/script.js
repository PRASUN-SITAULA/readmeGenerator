document.querySelector('.btn').addEventListener('click', async function (){
    const project_description = document.getElementById('description').value
    const project_language = document.querySelector('#language').value

    const requestData = {
        descrition: project_description,
        language: project_language,
    };
    // Fetch API to send a POST request to the server
  await fetch('/generate-readme', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData),
  })
//   .then(response => response.json())
//   .then(data => {
//     if (data.success) {
//       // Display the generated README content
//       alert('README generated successfully:\n\n' + data.readmeContent);
//     } else {
//       // Display an error message
//       alert('Error generating README:\n\n' + data.error);
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);

//     // Display a generic error message
//     alert('An error occurred while generating README.');
//   });
})






