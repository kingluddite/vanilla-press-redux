const model = {};

model.init = function () {
  // model.updateLocalStore( jsonData );
};

/**
 * Gets content from local store
 *
 * @return store {Object} Object or Array of objects of site data
 */
model.getLocalStore = function () {
  return JSON.parse( localStorage.getItem( 'kingluddite' ) );
};
