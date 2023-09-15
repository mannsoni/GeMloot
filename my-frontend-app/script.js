// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch and display user data
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://sheetdb.io/api/v1/lic692opgm6s1'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();
            displayUsers(users);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to display user data in the UI
    const displayUsers = (users) => {
        const userList = document.getElementById('userList');
        userList.innerHTML = ''; // Clear previous content
        users.forEach((user) => {
            const userDiv = document.createElement('div');
            userDiv.innerHTML = '<p>Name: ${user.name}</p><p>Email: ${user.email}</p>';
            userList.appendChild(userDiv);
        });
    };

    // Fetch and display user data when the page loads
    fetchUsers();
});