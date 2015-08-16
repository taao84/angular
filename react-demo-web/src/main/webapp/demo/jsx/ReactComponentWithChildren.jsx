/** @jsx React.DOM */

var FilteredList = React.createClass({
  filterList: function(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item) {
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function() {
     return {
       initialItems: [
         "Apples",
         "Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items: []
     }
  },
  componentWillMount: function() {
    // Initialize the list of items with the list of initial items
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    // The property  items is used to pass the state value to the child component
    return (
      <div style={{border: '1px solid', padding: '5px 5px', margin: '5px 5px;'}}>
        <input type="text" placeholder="Search..." onChange={this.filterList} />
        <List items={this.state.items} />
      </div>
    );
  }
});

var List = React.createClass({
  render: function() {
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
      }
      </ul>
    )  
  }
});

React.render(<FilteredList/>, document.getElementById('mount-point7'));