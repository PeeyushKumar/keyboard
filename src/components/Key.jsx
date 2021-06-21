import { Component } from 'react';

class Key extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {isSpace, character} = this.props;

        let className = 'key';
        if (isSpace) className += ' space';
        
        return(
            <div className={className}>
                <h3 className='character'>{character}</h3>
            </div>
        );
    }
}

export default Key;