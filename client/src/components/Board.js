import React, { useState } from 'react'
import { useChannelStateContext, useChatContext} from 'stream-chat-react'
import Square from './Square'

function Board() {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
    const [player, setPlayer] = useState("X")
    const [turn, setTurn] = useState("X")

    const { channel } = useChannelStateContext()
    const {client} = useChatContext()

    const chooseSquare = async (square) => {
        if (turn === player && board[square] === "") {
            setTurn(player === "X" ? "O" : "X")

            await channel.sendEvent({
                type: "game-move",
                data: {square, player},
            })
            setBoard(board.map((val, idx) => {
                if (idx === square && val === "") {
                    return player
                }
                return val
            })
          )
        }
    }

    channel.on((event) => {
        if (event.type == "game-move" && event.user.id !== client.userID) {
            const currentPlayer = event.data.player === "X" ? "O" : "X"
            setPlayer(currentPlayer)
            setTurn(currentPlayer)
            setBoard(
                board.map((val, idx) => {
                    if (idx === event.data.square && val === "") {
                        return event.data.player
                    }
                    return val
                })
            )
        }
    })

    return (
        <div className="board">
            <div className="row">
                <Square
                    val={board[0]}
                    chooseSquare={() => {
                        chooseSquare(0);
                    }}
                />
                <Square
                    val={board[1]}
                    chooseSquare={() => {
                        chooseSquare(1);
                    }}
                />
                <Square
                    val={board[2]}
                    chooseSquare={() => {
                        chooseSquare(2);
                    }}
                />
            </div>
            <div className="row">
                <Square
                    val={board[3]}
                    chooseSquare={() => {
                        chooseSquare(3);
                    }}
                />
                <Square
                    val={board[4]}
                    chooseSquare={() => {
                        chooseSquare(4);
                    }}
                />
                <Square
                    val={board[5]}
                    chooseSquare={() => {
                        chooseSquare(5);
                    }}
                />
            </div>
            <div className="row">
                <Square
                    val={board[6]}
                    chooseSquare={() => {
                        chooseSquare(6);
                    }}
                />
                <Square
                    val={board[7]}
                    chooseSquare={() => {
                        chooseSquare(7);
                    }}
                />
                <Square
                    val={board[8]}
                    chooseSquare={() => {
                        chooseSquare(8);
                    }}
                />
            </div>
        </div>
    )
}

export default Board