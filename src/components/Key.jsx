import { Component } from 'react';

class Key extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {isSpace, character, isPressed} = this.props;

        let className = 'key ';
        if (!isSpace) className += ' key-default'; 
        if (isSpace) className += ' key-space';
        if (isSpace) character = '____';

        if (isPressed) className += ' key-pressed'

        return(
            <div className={className}>
                <h3>{character}</h3>
            </div>
        );
    }
}

export default Key;