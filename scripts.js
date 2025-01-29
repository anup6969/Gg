const notesData = {
  'jee-physics': `
    <h3>Physics Notes</h3>
    <p><strong>Kinematics:</strong> Study of motion using equations like s = ut + 1/2 at².</p>
    <p><strong>Newton's Laws:</strong> F = ma forms the basis of mechanics.</p>
    <canvas id="projectile-motion" width="400" height="200"></canvas>
    <script>
      const canvas = document.getElementById('projectile-motion').getContext('2d');
      canvas.beginPath();
      canvas.arc(200, 100, 80, 0, Math.PI);
      canvas.stroke();
    </script>
  `,
  // Add detailed notes for other subjects...
};

function showNotes(subject) {
  const contentDiv = document.getElementById('notes-content');
  contentDiv.innerHTML = notesData[subject] || '<p>No notes available.</p>';
}
