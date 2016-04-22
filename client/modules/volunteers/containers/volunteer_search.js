import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/volunteer_search';


export const composer = ({context}, onData) => {

  const {Meteor, Collections, LocalState} = context();
  let searchResults = LocalState.get('volunteers.searchResults');
  onData(null, {
    searchResults,
    resultsCount: searchResults.length
  });
};

export const depsMapper = (context, actions) => ({
  getResults: actions.search.getResults,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
