/* Estilos generales */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header, footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
}

main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
}

/* Estilos para el menú principal */

#main-menu {
    text-align: center;
}

#player-names-form {
    margin-bottom: 20px;
}

#player-names-form label {
    display: block;
    margin-bottom: 5px;
}

#player-names-form input[type="text"],
#player-names-form select {
    padding: 5px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
}

#player-names-form button {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
}

#player-names-form button:hover {
    background-color: #555;
}

/* Estilos para el juego de Bingo */

#bingo-game {
    text-align: center;
}

#bingo-board {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Ajustar según el tamaño del cartón */
    gap: 5px;
    margin-bottom: 20px;
}

#bingo-board div {
    border: 1px solid #333;
    padding: 10px;
    text-align: center;
    background-color: #f0f0f0;
}

#draw-number-btn {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
}

#draw-number-btn:hover {
    background-color: #555;
}

#game-status {
    margin-top: 20px;
}

#return-to-menu-btn {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
}

#return-to-menu-btn:hover {
    background-color: #555;
}