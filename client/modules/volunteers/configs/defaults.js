

export default function(context) {
  const {LocalState} = context;
  LocalState.setDefault('volunteers.searchResults', []);
}
