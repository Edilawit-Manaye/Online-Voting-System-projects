const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        console.log('DOM changed:', mutation);
    });
});


const config = { childList: true, subtree: true };


const targetNode = document.getElementById('yourTargetNodeId');
if (targetNode) {
    observer.observe(targetNode, config);
}


document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const formData = {
        studentId: document.getElementById('studentId').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    
    fetch('submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message; 
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
