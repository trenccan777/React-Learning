import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  //It is called after each DOM render
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //It is called after component is ever removed from the DOM. 
  componentWillUnmount() {
      console.log('test')
    clearInterval(this.timerID);
  }

  tick() {
  
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <p>It is {this.state.date.toLocaleTimeString()}</p>;
  }
}
