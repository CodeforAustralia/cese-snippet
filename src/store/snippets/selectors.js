import get from 'lodash/get';
import { getFilterKey } from "./helpers";

const selectSnippet = (state, id) => {
  return get(state, `snippets.byId[${id}]`, null);
};

const selectSnippets = (state, ids) => {
  return ids.map(id => {
    return selectSnippet(state, id);
  }).filter(snippet => {
    return snippet !== null;
  })
};

export const selectSnippetsByFilter = (state, filterProps) => {
  const filterKey = getFilterKey(filterProps);
  const filteredIds = get(state, `snippets.filters[${filterKey}]`, []);
  return selectSnippets(state, filteredIds);
};
