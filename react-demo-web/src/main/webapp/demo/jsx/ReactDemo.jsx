/** @jsx React.DOM */
React.render(
  <h1>Hello, world with JSX!</h1>,
  document.getElementById('mount-point1')
);

/** 
  * Creates a basic component
  */
var MyComponent = React.createClass({
  render: function(){
    return (
      <h1>Hello, world, this is a component!</h1>
    );
  }
});


React.render(
  <MyComponent/>,
  document.getElementById('mount-point3')
);

/** 
  * Creates a component with properties.
  */
var MyComponentWithProps = React.createClass({
  render: function(){
    return (
      <h1>Hello, {this.props.name} component with properties!</h1>
    );
  }
});

React.render(
  <MyComponentWithProps name="Handsome" />, 
  document.getElementById('mount-point4')
);

/** 
  * Creates a component where the properties are initialized before any interaction.
  */
var MyComponentWithInitValues = React.createClass({
  getInitialState: function(){
    return {
      count: 5
    }
  },
  render: function() {
    return (
      <h1>Component initialized with the value: {this.state.count}</h1>
    )
  }
});

React.render(
  <MyComponentWithInitValues />, 
  document.getElementById('mount-point5')
);


/**
 * Creates a component with events.
 */
var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function() {
     return {
       count: 0
     }
  },
  render: function() {
    return (
      <div class="my-component" style={{border: '1px solid', padding: '5px 5px'}}>
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});

React.render(
  <Counter/>, 
  document.getElementById('mount-point6')
);