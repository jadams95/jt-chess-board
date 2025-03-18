function createBoard(){
    var c = document.getElementById("board");
    var ctx = c.getContext("2d");

    ctx.moveTo(600, 500);
    ctx.fillStyle = "green";

    // depending on row 
    ctx.fillRect(10, 10, 100, 100);
}


export default function Board(){
    return (
    <canvas id="board">
        <createBoard />
    </canvas>
    )
}