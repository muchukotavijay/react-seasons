import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {

    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((pos) => {
            setTimeout( () => this.setState({ lat : pos.coords.latitude }), 5000 );
            //this.setState({ lat : pos.coords.latitude });
        }, (err) => {
            this.setState({ errorMessage: err.message });
        });
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error : { this.state.errorMessage }
                </div>
            )
        } 
        
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat }/>
        } 

        return (
            <Loader loadText="Please allow us to access your location"/>
        )
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'));