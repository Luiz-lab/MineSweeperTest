# Notes - nome do Kata

## Definicions
Você é apresentado a um tabuleiro de quadrados. Alguns quadrados contêm minas (bombas), outros não. Se você pisar
em um quadrado contendo uma bomba, você perde. Se você conseguir limpar todos os quadrados (sem clicar em nenhum
bombas) você vence.
Limpar um quadrado que não possui uma bomba revela o número de quadrados vizinhos que contêm bombas.
Se você adivinhar que um quadrado contém uma bomba, marque-o com uma bandeira.
Os "vizinhos" de um quadrado são os quadrados adjacentes acima, abaixo, à esquerda, à direita e todas as 4 diagonais. Quadrados no
os lados do tabuleiro ou em um canto têm menos vizinhos. A placa não envolve as bordas. Se você
limpe um quadrado com 0 bombas vizinhas, todos os seus vizinhos serão abertos automaticamente; recursivamente.
O primeiro quadrado que você abrir pode ser uma bomba.
Você não precisa marcar todas as bombas para vencer; você só precisa abrir todos os quadrados que não sejam bombas.

///

You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step
on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any
bombs) you win.
Clearing a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs.
If you guess a square contains a bomb mark it with a flag.
A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the
sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you
clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively.
The first square you open could be a bomb.
You don't have to mark all the bombs to win; you just need to open all non-bomb squares.

### Domains 
## Board 
    - A square table 
    - random bombs in some squares
    - On the empty spaces we need a number of bombs arround 
    - The posiblity to mark down the bombs

## Player 
    - A bot how choose a random number x, that x > min squaare spot and x < max number
    -   


### Rules 
- The player choose 1 spot using a cartesian method to input 2 numbers
- If the player select the bom square - Game Over 
- If the player select the empty square, the board show the number of bombs around
- If the player mark down the bombs spot and made selec the other empty space -Victory 
- If the player input is 0,0 the the board is clear

** Labels **
✅ - Done
❌ - Error
🚧 - WIP

### Pomodoro 1 ⏱️

