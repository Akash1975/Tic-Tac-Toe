let boxes = document.querySelectorAll(".box")
let newGame = document.querySelector('.new-game');
let resetGame = document.querySelector('.reset-game');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg')

const keypress= new Audio('./keypress.wav');

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const showWinner = (winner) => {
       msg.innerText = `Congratulation Winner is : "${winner}"`;
        msgContainer.classList.remove('hide');
        disableBoxes();
    }

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add('hide')
    })
}


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        keypress.play();
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWiner();

    })
});

const checkWiner = () => {
    for (let pattern of winPatterns) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                console.log('Winner', position1);
                showWinner(position1);
            }
        }
    }
}

const reset_Btn = () => {
    turnO = true;
    enableBoxes();

}

resetGame.addEventListener('click', reset_Btn)
newGame.addEventListener('click', reset_Btn)