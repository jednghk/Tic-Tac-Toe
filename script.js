const Player = (index, marker) => {
    return {index, marker};
};

const gameBoard = (function() {
    //gameBoardArr
    let gameBoardArr = {'1': '', '2': '', '3': '','4': '', '5': '', '6': '','7': '', '8': '', '9': ''}
    //cache DOM
    body = document.querySelector('body')
    //create players
    const player1 = Player(1, 'X')
    const player2 = Player(2, 'O')
    let currentPlayer = player1
    
    const createPlayAgainBtn = () => {
        const playAgainBtn = document.createElement('button')
        playAgainBtn.setAttribute('onclick','gameBoard.playAgain()')
        playAgainBtn.textContent = 'Play Again'
        return playAgainBtn
    }

    const createXSymbol = () => {
        const Xsymbol = document.createElement('img')
        Xsymbol.src = 'Xsymbol.svg'
        Xsymbol.style.cssText = 'width: 80px; height: 80px; margin: auto'
        return Xsymbol
    }

    const createOSymbol = () => {
        const Osymbol = document.createElement('img')
        Osymbol.src = 'Osymbol.svg'
        Osymbol.style.cssText = 'width: 80px; height: 80px; margin: auto'
        return Osymbol
    }

    const hasMarker = (array, index) => {
        if (array[index] !== '') {
            return true
        }
    }

    const playAgain = () => {
        //reset board, remove text and play again button, rerender board
        gameBoardArr = createBlankBoard()
        removeTextAndButton()
        renderBoard()
    }

    const createBlankBoard = () => {
        return {'1': '', '2': '', '3': '','4': '', '5': '', '6': '','7': '', '8': '', '9': ''}
    }

    const removeTextAndButton = () => {
        let text = document.querySelector('p')
        let btn = document.querySelector('button')
        text.remove()
        btn.remove()
    }

    const placeMarker = (grid) => {
        //aim for this to purely update array
        //check for win and switch players with another function
        let gridIndex = grid.dataset.index

        //returns if there's already a symbol
        if (hasMarker(gameBoardArr,gridIndex)) {
            return
        }

        gameBoardArr[gridIndex] = currentPlayer.marker 
        renderBoard()

        //declares winner
        if (checkWin(gameBoardArr) || isFullArr(gameBoardArr)) {
            const winOrDraw = document.createElement('p')
            winOrDraw.style.cssText = 'margin-top: 30px; font-size: 30px'
            if (checkWin(gameBoardArr)) {
                winOrDraw.textContent = `The Winner is '${checkWin(gameBoardArr)}'!`
            } else {
                winOrDraw.textContent = `It's a draw!`
            }
            body.appendChild(winOrDraw)
            body.appendChild(createPlayAgainBtn())
        }

        //take note this changes a global variable
        switchPlayers()
    }

    const checkWin = (board) => {
        const tl = board['1']
        const tc = board['2']
        const tr = board['3']
        const cl = board['4']
        const cc = board['5']
        const cr = board['6']
        const bl = board['7']
        const bc = board['8']
        const br = board['9']

        if (tl !== '') {
            if (tl == tc && tl == tr) {
                if (tl == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            }else if (tl == cc && tl == br) {
                if (tl == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            }else if (tl == cl && tl == bl) {
                if (tl == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } 
        }
        if (tc !== '') {
            if (tc == cc && tc == bc) {
                if (tc == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            }
        }
        if (tr !== '') {
            if (tr == cr && tr == br) {
                if (tc == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            }
        }
        if (cl !== '') {
            if (cl == cc && cl == cr) {
                if (cl == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            }
        }
        if (bl !== '') {
            if (bl == bc && bl == br) {
                if (bl == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            }else if (bl == cc && bl == tr) {
                if (bl == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            }
        }
        return false
    }

    

    const switchPlayers = () => {
        if (currentPlayer == player1) {
            currentPlayer = player2
        }else{
            currentPlayer = player1
        }
    }

    const createGrid = () => {
        let grid = document.createElement('div')
        grid.style.cssText = 'background-color:rgb(253, 249, 196); display: flex; align-text: center; justify-content: center;'
        grid.setAttribute('onclick', 'gameBoard.placeMarker(this)')
        return grid
    }

    const createNewBoard = () => {
        const newGameBoard = document.createElement('div')
        newGameBoard.setAttribute('id', 'gameboard')
        return newGameBoard
    }

    const appendSymbol = (symbol, grid) => {
        let Xsymbol = createXSymbol()
        let Osymbol = createOSymbol()
        if (symbol == 'O') {
            grid.appendChild(Osymbol)
        }else if (symbol == 'X') {
            grid.appendChild(Xsymbol)
        }
    }

    const renderBoard = () => {
        const gameBoard = document.querySelector('#gameboard')
        gameBoard.remove()
        
        newGameBoard = createNewBoard()

        for (const [key, symbol] of Object.entries(gameBoardArr)) {
            //create individual grid
            let grid = createGrid()
            grid.dataset.index = key
            //need to add conditional to put either X or O
            appendSymbol(symbol, grid)
            newGameBoard.appendChild(grid)
        }

        body.appendChild(newGameBoard)
    }
    
    const isFullArr = (arr) => {
        for (const [key, symbol] of Object.entries(arr)) {
            if (!symbol) {
                return false
            }
        }
        return true
    }

    return {placeMarker, renderBoard, checkWin, playAgain}
})();

const gameController = () => {
    //while no win, initialize the board, repeat loop
    //to constantly update the array, check for win and render the board
    gameBoard.renderBoard()

}

gameController()