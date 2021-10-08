import { Component } from 'react';
import Keyboard from './Keyboard';

class Game extends Component {
    render() {
        return(
            <div className='game'>
                <Keyboard></Keyboard>
            </div>
        );
    }
}

export default Game; 