import { Component } from 'react';

import Key from './Key';
import keyLayout, {disabledKeys} from '../layouts/Layout';


class Keyboard extends Component {
    constructor(props) {
        super(props);

        const keys = keyLayout.map(row => {
            return row.map(key => {
                return {
                    ...key,
                    isDisabled: disabledKeys.includes(key.keyCode) ? true : false,
                    isPressed: false,
                }
            });
        });

        this.state = {
            keys
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', (event) => this.handleOnKeyDown(event))
        window.addEventListener('keyup', (event) => this.handleOnKeyUp(event))
    }


    handleOnKeyDown = (event) => {
        event.preventDefault();

        if (disabledKeys.includes(event.code)) return;

        let {keys} = this.state;

        keys = keys.map(row => {
            return row.map(key => {
                if (key.keyCode !== event.code) return key;
                key.isPressed = true;
                return key;
            });
        })

        this.setState({
            keys
        });
    }

    handleOnKeyUp = (event) => {
        
        if (disabledKeys.includes(event.code)) return;
        
        let {keys} = this.state;

        keys = keys.map(row => {
            return row.map(key => {
                if (key.keyCode !== event.code) return key;
                key.isPressed = false;
                return key;
            });
        })

        this.setState({
            keys
        });
    }


    render = () => {

        const {keys} = this.state;

        return(
            <div className="keyboard"> 
                {
                    keys.map((row, rowIdx) =>(
                        <div className='key-row' key={rowIdx}>
                            {
                                row.map((key, keyIdx) => (
                                    <Key
                                        key={keyIdx}
                                        {...key}
                                    ></Key>)
                                )
                            }
                        </div>)
                    )
                }
            </div>
        );
    }
}

export default Keyboard;