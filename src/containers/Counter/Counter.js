import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';   // connect is a fn that returns hoc

class Counter extends Component {
  state = {
    counter: 0
  }

  counterChangedHandler = ( action, value ) => {
    switch ( action ) {
      case 'inc':
        this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
        break;
      case 'dec':
        this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
        break;
      case 'add':
        this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
        break;
      case 'sub':
        this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
        break;
      default:
        console.log('hello');
    }
  }

  render () {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
        <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
        <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
        <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    ctr: state.counter
  };
}

export default connect(mapStateToProp)(Counter);