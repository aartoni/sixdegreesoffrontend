import clone from 'lodash/clone';

import facts from './resources/facts.json';
import suggestions from './resources/suggestions.json';

export const getNodeUrl = (pageTitle: string): string => {
  const baseUrl = 'https://en.wikipedia.org/wiki/';
  const sanitizedPageTitle = pageTitle.replace(/ /g, '_');
  return `${baseUrl}${encodeURIComponent(sanitizedPageTitle)}`;
};

let unusedSuggestions: string[] = [];
export const getRandomSuggestion = (): string => {
  if (unusedSuggestions.length === 0) {
    unusedSuggestions = clone(suggestions);
  }

  const indexToRemove = Math.floor(Math.random() * unusedSuggestions.length);
  return unusedSuggestions.splice(indexToRemove, 1)[0];
};

let unusedFacts: string[] = [];
export const getRandomFact = (): string => {
  if (unusedFacts.length === 0) {
    unusedFacts = clone(facts);
  }

  const indexToRemove = Math.floor(Math.random() * unusedFacts.length);
  return unusedFacts.splice(indexToRemove, 1)[0];
};

export const getNumberWithCommas = (val: number): string => {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
