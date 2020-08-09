import React from 'react';


const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.loadText}</div>
        </div>
    )
};

Loader.defaultProps = {
    loadText: 'Loading ...'
}

export default Loader;