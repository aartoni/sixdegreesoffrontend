import {zip} from 'lodash';

import {HomeLink} from '../types';

export const API_URL = import.meta.env.VITE_API_URL;
export const THIRD_PARTY_API_URL = import.meta.env.VITE_THIRD_PARTY_API_URL;

const homeLinkRefs = import.meta.env.VITE_HOME_LINK_REFS?.split(',') ?? [];
const homeLinkNames = import.meta.env.VITE_HOME_LINK_NAMES?.split(',') ?? [];
export const HOME_LINKS: HomeLink[] = [];

if (homeLinkRefs.length === homeLinkNames.length) {
  zip(homeLinkRefs, homeLinkNames)
    .map(([href, name]) => ({href, name}) as HomeLink)
    .forEach((entry) => HOME_LINKS.push(entry));
}

const AUTHOR_EMAIL = import.meta.env.VITE_AUTHOR_EMAIL;
const URL = import.meta.env.VITE_URL;
export const TOPIC = import.meta.env.VITE_TOPIC;
export const USER_AGENT = `Six Degrees of ${TOPIC}/1.0 (${URL}; ${AUTHOR_EMAIL})`;
