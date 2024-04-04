document.addEventListener('DOMContentLoaded', function() {
    const deleteAllEntriesBtn = document.getElementById('deleteAllEntriesBtn');
  
    deleteAllEntriesBtn.addEventListener('click', function() {
      // Make a DELETE request to the backend endpoint to delete all entries
      fetch('http://localhost:3001/deleteAllEntries', {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        // Handle success, update UI, or show a success message to the user
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error, update UI, or show an error message to the user
      });
    });
  });
  