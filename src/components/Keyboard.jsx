import { Component } from 'react';

import Key from './Key';

class Keyboard extends Component {
    constructor() {
        
        super();

        this.state = {
            keys : [
                ['Q','W','E','R','T','Y','U','I','O','P'],
                ['A','S','D','F','G','H','J','K','K'],
                ['Z','X','C','V','B','N','M']
            ]
        }
    }

    render() {

        const {keys} = this.state;

        return(
            <div className="keyboard">
                {
                    keys.map(row => {   
                        return(
                            <div>
                                {row.map(ch => <Key isSpace={false} character={ch}></Key>)}
                            </div>
                        )
                    })
                }
                <div>
                    <Key isSpace={true} character='_____'></Key>
                </div>
            </div>
        );
    }
}

export default Keyboard;