import { Component } from 'react';

class Key extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {isSpace, character} = this.props;

        let containerClassName = 'key-container';
        if (!isSpace) containerClassName += ' key-alphabet-container';
        if (isSpace) containerClassName += ' key-space-container';
        
        let keyClassname = 'key ';
        if (!isSpace) keyClassname += ' key-alphabet'; 
        if (isSpace) keyClassname += ' key-space';

        return(
            <div className={containerClassName}>
                <div className={keyClassname}>
                    <h3 className='character'>{character}</h3>
                </div>
            </div>
        );
    }
}

export default Key;