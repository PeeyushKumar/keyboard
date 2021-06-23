import React,{ Component } from 'react';

import Key from './Key';

class Keyboard extends Component {
    constructor(props) {
        super(props);

        const characters = [
            ['Q','W','E','R','T','Y','U','I','O','P'],
            ['A','S','D','F','G','H','J','K','L'],
            ['Z','X','C','V','B','N','M'],
            [' ']
        ]

        const keys = characters.map(row => {
            return row.map(character => {
                return {
                    character: character,
                    isPressed: false,
                    isSpace: false
                }
            });
        });

        keys[3][0].isSpace = true;

        this.state = {
            keys
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', (event) => this.handleOnKeyDown(event))
        window.addEventListener('keyup', (event) => this.handleOnKeyUp(event))
    }


    handleOnKeyDown = (event) => {
        const {keys} = this.state;
        const characterPressed = event.key.toUpperCase();

        let rows = keys.length;
        for (let rowIdx=0; rowIdx<rows; rowIdx++) {
            let cols = keys[rowIdx].length;
            for (let colIdx=0; colIdx<cols; colIdx++) {
                if(keys[rowIdx][colIdx].character === characterPressed) {
                    keys[rowIdx][colIdx].isPressed = true;
                }
            }
        }

        this.setState({
            keys
        });
    }

    handleOnKeyUp = (event) => {
        const {keys} = this.state;
        const characterPressed = event.key.toUpperCase();

        let rows = keys.length;
        for (let rowIdx=0; rowIdx<rows; rowIdx++) {
            let cols = keys[rowIdx].length;
            for (let colIdx=0; colIdx<cols; colIdx++) {
                if(keys[rowIdx][colIdx].character === characterPressed) {
                    keys[rowIdx][colIdx].isPressed = false;
                }
            }
        }

        this.setState({
            keys
        });
    }


    render = () => {

        const {keys} = this.state;

        return(
            <div className="keyboard"> 
                {
                    keys.map((row, rowIdx) => {   
                        return(
                            <div key={rowIdx}>
                                {row.map((key, keyIdx) => {
                                    return(
                                        <Key
                                            key={keyIdx}
                                            isSpace={key.isSpace}
                                            isPressed={key.isPressed}
                                            character={key.character}
                                        ></Key>)
                                })}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Keyboard;