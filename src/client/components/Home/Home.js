import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div onClick={() => { console.log(new Date() + ' ' + 'ouch!') }}>Welcome Home!</div>
        );
    }
}
