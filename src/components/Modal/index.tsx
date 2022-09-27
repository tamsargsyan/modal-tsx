import React from "react"
import { BooleanLiteral } from "typescript"
import "./index.css"

interface Props {
    onClick: () => void;
}

export const Modal: React.FC<Props> = ({onClick}) => {
    return (
        <>
            <div className="modal">
                <div className="modal-header">
                    <div className="title">Modal</div>
                    <button className="close-btn" onClick={onClick}>&times;</button>
                </div>
                <div className="modal-body">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eligendi vitae sunt minus sapiente, nihil maiores id aperiam illum fugit illo saepe facere alias veritatis, itaque eaque unde! Aliquam, eveniet!</p>
                </div>
            </div>
            <div className="overlay" onClick={onClick}></div>
        </>
    )
}