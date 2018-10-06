import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div onClick={() => { console.log(new Date() + ' ' + 'ouch!') }}>Welcome Home!</div>
        );
    }
}
