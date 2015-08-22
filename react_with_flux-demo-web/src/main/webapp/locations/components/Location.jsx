var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Location = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("LocationStore")],

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return flux.store("LocationStore").getState();
  },

  componentDidMount() {
    this.getFlux().actions.fetchLocations();
  },

  onChange(state) {
    this.setState(state);
  },

  selectItem : function() {
    
  },

  render() {
    if (this.state.errorMessage) {
      return (<div>{this.state.errorMessage}</div>);
    }

    if (this.state.loading) {
      return (
        <div><img src="../images/loadingIcon.gif" /></div>
      )
    }

    var locations = this.state.locations;
    return (
      <ul>
        {
          Object.keys(locations).map(function(location) {
            return <li key={location} onClick="selectItem">{locations[location].name}</li>;
          })
        }
      </ul>
    );
  }
});

React.render(<Location flux={flux} />, document.getElementById("mount-point2"));
