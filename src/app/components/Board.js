'use client'
import { useEffect } from "react";


function CreateBoard(){

    useEffect(() => {
        var c = document.getElementById("board");
        var ctx = c.getContext("2d");
        const rows = 8; // Number of rows
        const cols = 8; // Number of columns
        const worldWidth = 8;

        const CELL_SIZE = 80;
        c.height = worldWidth * CELL_SIZE;
        c.width = worldWidth * CELL_SIZE;

        for(let x = 0; x < worldWidth + 1; x++){
            ctx.moveTo(CELL_SIZE * x, 0);
            ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE)
            for(let y = 0; y < worldWidth + 1; y++){
                ctx.moveTo(0, CELL_SIZE * y);
                ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y);
                const isEvenRank = (y + x) % 2 === 0;
                ctx.fillStyle = isEvenRank ? 'lightgray' : 'green';
                const file = x * CELL_SIZE;
                const rank = y * CELL_SIZE;
                ctx.fillRect(file, rank, CELL_SIZE, CELL_SIZE);
            }
        }
        

        ctx.stroke();

    });
}


export default function Board(){
    return (
    <canvas id="board">
        <CreateBoard />
    </canvas>
    )
}