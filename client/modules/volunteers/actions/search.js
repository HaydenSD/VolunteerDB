
export default {

  getResults ({LocalState}, searchText) {
    Meteor.call('volunteers.profiles.search', searchText, function (err, searchResults) {
      if (err) {
        throw err;
      } else {
        LocalState.set("volunteers.searchResults", searchResults);
      }
    });
  },

}
