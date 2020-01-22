import React from 'react'

const Keyboard = props => {



    return (
        <div className="keyboard-container">
            <div className="keyboard-top">
                <button className="top-row" id="ac">
                    <p>AC</p>
                </button>
                <button className="top-row" id="switch">
                    <p>+/-</p>
                </button>
                <button className="top-row" id="percent">
                    <p>%</p>
                </button>
                <button className="top-row" id="divide">
                    <p>/</p>
                </button>
            </div>

            <div className="keyboard-top-middle">
                <button className="top-middle" id="seven">
                    <p>7</p>
                </button>
                <button className="top-middle" id="eight">
                    <p>8</p>
                </button>
                <button className="top-middle" id="nine">
                    <p>9</p>
                </button>
                <button className="top-middle" id="mult">
                    <p>*</p>
                </button>
            </div>

            <div className="keyboard-middle">
                <button className="middle" id="">
                    <p>6</p>
                </button>
                <button className="middle" id="">
                    <p>5</p>
                </button>
                <button className="middle" id="">
                    <p>4</p>
                </button>
                <button className="middle" id="sub">
                    <p>-</p>
                </button>
            </div>

            <div className="keyboard-bottom-middle">
                <button className="bottom-middle" id="">
                    <p>3</p>
                </button>
                <button className="bottom-middle" id="">
                    <p>2</p>
                </button>
                <button className="bottom-middle" id="">
                    <p>1</p>
                </button>
                <button className="bottom-middle" id="plus">
                    <p>+</p>
                </button>
            </div>

            <div className="keyboard-bottom">
                <button className="bottom-row" id="">
                    <p>0</p>
                </button>
                <button className="bottom-row" id="decimal">
                    <p>.</p>
                </button>
                <button className="bottom-row" id="equal">
                    <p>=</p>
                </button>
            </div>
        </div>
    )
}

export default Keyboard