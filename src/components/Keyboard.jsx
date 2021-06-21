import { Component } from 'react';

import Key from './Key';

class Keyboard extends Component {
    constructor() {
        
        super();

        this.state = {
            keys : [
                ['q','w','e','r','t','y','u','i','o','p'],
                ['a','s','d','f','g','h','j','k','l'],
                ['z','x','c','v','b','n','m']
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
                    <Key isSpace={true} character=' '></Key>
                </div>
            </div>
        );
    }
}

export default Keyboard;