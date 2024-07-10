document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');

    // Fetch data from GPT API (Replace with your actual GPT endpoint)
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            prompt: "Say something cool!",
            max_tokens: 50
        })
    })
    .then(response => response.json())
    .then(data => {
        const message = data.choices[0].text;
        contentDiv.innerHTML = `<p>GPT says: ${message}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // Fetch data from another API (Replace with your actual endpoint)
    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        const otherMessage = data.message;
        contentDiv.innerHTML += `<p>Another API says: ${otherMessage}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
