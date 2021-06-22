import { Component } from 'react';

class Key extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {isSpace, character, isPressed} = this.props;

        let containerClassName = 'key-container';

        if (!isSpace) containerClassName += ' key-alphabet-container';
        if (isSpace) containerClassName += ' key-space-container';
        
        let keyClassname = 'key ';
        if (!isSpace) keyClassname += ' key-alphabet'; 
        if (isSpace) keyClassname += ' key-space';
        if (isSpace) character = '____';

        if (isPressed) keyClassname += ' key-pressed'

        return(
            <div className={containerClassName}>
                <div className={keyClassname}>
                    <h3>{character}</h3>
                </div>
            </div>
        );
    }
}

export default Key;