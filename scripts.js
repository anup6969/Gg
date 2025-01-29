// Data for JEE and NEET Notes
const notesData = {
  'jee-physics': `
    <h3>Physics Notes</h3>
    <p><strong>Kinematics:</strong> Study of motion using equations like s = ut + 1/2 at².</p>
    <p><strong>Newton's Laws:</strong> F = ma forms the basis of mechanics.</p>
  `,
  'jee-chemistry': `
    <h3>Chemistry Notes</h3>
    <p><strong>Atomic Structure:</strong> Bohr’s model, Quantum numbers.</p>
  `,
  'jee-maths': `
    <h3>Mathematics Notes</h3>
    <p><strong>Quadratic Equations:</strong> The general form is ax² + bx + c = 0.</p>
  `,
  'neet-physics': `
    <h3>NEET Physics Notes</h3>
    <p><strong>Electrostatics:</strong> Coulomb’s law and electric field.</p>
  `,
  'neet-chemistry': `
    <h3>NEET Chemistry Notes</h3>
    <p><strong>Biomolecules:</strong> Structure and function of DNA and RNA.</p>
  `,
  'neet-biology': `
    <h3>Biology Notes</h3>
    <p><strong>Cell Biology:</strong> Structure and functions of organelles.</p>
  `,
};

// Function to show notes when button is clicked
function showNotes(subject) {
  const contentDiv = document.getElementById('notes-content');
  contentDiv.innerHTML = notesData[subject] || '<p>No notes available for this topic.</p>';
}

// Attach event listeners dynamically
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button"); 
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const subject = this.getAttribute("onclick").match(/'([^']+)'/)[1]; 
      showNotes(subject);
    });
  });
});
