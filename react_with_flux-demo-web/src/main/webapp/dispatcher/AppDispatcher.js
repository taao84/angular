var pushProperties = function(target, source) {
  for (propertyName in source) {
    target[propertyName] = source[propertyName];
  }
};

var stores = {
  TodoStore: new TodoStore(),
  LocationStore: new LocationStore()
};

var actions = {};
pushProperties(actions, TodoActions);
pushProperties(actions, LocationActions);

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});