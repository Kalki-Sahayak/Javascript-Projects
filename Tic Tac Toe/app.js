let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#New");
let win = document.querySelector("#win");
let msgContainer = document.querySelector(".msg");

let turnO = true;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            box.classList.add("o");
            box.classList.remove("x");
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("x");
            box.classList.remove("o");
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const showWinner = (winner) => {
    win.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove ("hide");
    for (let box of boxes)
        box.disabled = true;
}

const checkWinner=  () => {
    for (pattern of winPatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1!= "" &&  pos2 !="" && pos3!= "")
        {
            if (pos1 === pos2 && pos2 === pos3)
                // alert(`Winner is ${pos1}`);
                showWinner(pos1);
        }
    }
}

const enableBoxes = ()=>{
    for (let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("x", "o");
    }
}

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);