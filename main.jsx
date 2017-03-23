import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>Current Time is: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

ReactDOM.render(<Clock name="PassionInfinite!"/>, document.getElementById('app'));