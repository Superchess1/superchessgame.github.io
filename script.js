document.addEventListener('DOMContentLoaded', function () {
  let selectedPiece = null; // Variable para almacenar la pieza seleccionada

  // Agrega un evento de clic a todas las celdas del tablero
  document.querySelectorAll('td').forEach(function (cell) {
    cell.addEventListener('click', function () {
      if (selectedPiece) {
        // Si ya hay una pieza seleccionada, verifica si el clic es en una casilla permitida
        if (this.classList.contains('allowed')) {
          // Mueve la pieza a la casilla seleccionada
          this.innerHTML = selectedPiece.innerHTML;
          selectedPiece.innerHTML = '';
          selectedPiece.classList.remove('selected');
          selectedPiece = null;

          // Limpia las clases 'allowed' después de realizar el movimiento
          document.querySelectorAll('.allowed').forEach(function (allowedCell) {
            allowedCell.classList.remove('allowed');
          });
        } else {
          // Si no es una casilla permitida, deselecciona la pieza
          selectedPiece.classList.remove('selected');
          selectedPiece = null;
        }
      } else {
        // Si no hay una pieza seleccionada, verifica si la celda tiene una pieza para seleccionar
        if (this.innerHTML !== '') {
          selectedPiece = this;
          selectedPiece.classList.add('selected');

          // Resalta las casillas permitidas para la pieza seleccionada
          highlightAllowedMoves(selectedPiece);
        }
      }
    });
  });

  // Agrega un evento de clic al botón de reinicio
  document.getElementById('resetButton').addEventListener('click', function () {
    // Reinicia la partida (vuelve a cargar la página por ahora)
    location.reload();
  });

  // Función para resaltar las casillas permitidas para la pieza seleccionada
  function highlightAllowedMoves(piece) {
    // Lógica de resaltado de casillas permitidas (puedes personalizar esto según las reglas del juego)
    // Aquí solo se resaltan las celdas vacías
    document.querySelectorAll('td').forEach(function (cell) {
      if (cell.innerHTML === '') {
        cell.classList.add('allowed');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Chessboard interaction
  const chessboardCells = document.querySelectorAll('#game-board1 td, #game-board td');
  let selectedPiece = null;

  chessboardCells.forEach(cell => {
      cell.addEventListener('click', function () {
          if (!selectedPiece) {
              // If no piece is selected, store the selected piece
              if (this.textContent.trim() !== '') {
                  selectedPiece = this;
                  this.classList.add('selected');
              }
          } else {
              // If a piece is already selected, move it to the new position
              this.innerHTML = selectedPiece.innerHTML;
              selectedPiece.innerHTML = '';
              selectedPiece.classList.remove('selected');
              selectedPiece = null;
          }
      });
  });

  // Navigation functionality
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const targetSectionId = this.getAttribute('href');
          const targetSection = document.querySelector(targetSectionId);

          if (targetSection) {
              // Scroll to the target section smoothly
              targetSection.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
});
