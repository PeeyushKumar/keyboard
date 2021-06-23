import { Component } from 'react';
import {keyRepr} from '../layouts/Layout'

class Key extends Component {
    render() {    
        const {keyCode, isPressed, isDisabled, height, width, fontSize} = this.props;

        let className = 'key';
        if (isPressed) className += ' key-pressed';
        if (isDisabled) className += ' key-disabled';

        const style = {
            height,
            width,
            fontSize
        }

        return(
            <div
                className={className}
                style={style}
            >
                <h3>{keyRepr[keyCode]}</h3>
            </div>
        );
    }
}

export default Key;