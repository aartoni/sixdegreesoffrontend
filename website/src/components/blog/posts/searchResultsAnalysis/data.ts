export const totalSearches = 503498;
export const uniqueSearches = 377135;
export const percentUniqueSearches = ((uniqueSearches / totalSearches) * 100).toFixed(2);
export const searchesWithNoPaths = 4018;
export const percentNoPathsSearches = ((searchesWithNoPaths / uniqueSearches) * 100).toFixed(2);
export const averageDegreesOfSeparation = 3.019;
export const degreesOfSeparationHistogramData = [
  524, 10216, 90068, 183172, 67754, 16317, 3738, 1228, 141, 27, 1, 1,
];
export const averageDuration = 0.76;
export const medianDuration = 0.38;
export const percentile95Duration = 2.66;
export const percentile99Duration = 4.99;

export const mostPopularSearchesHeaders: string[] = [
  'Search',
  'Degrees of Separation',
  'Number of Searches',
  'Source',
];

interface PopularSearch {
  readonly sourceFriendlyName: string;
  readonly targetFriendlyName: string;
  readonly degreesOfSeparation: number | null; // null means no path.
  readonly numberOfSearches: number;
  readonly referenceText: string;
  readonly referenceUrl: string;
}

export const mostPopularSearches: PopularSearch[] = [
  {
    sourceFriendlyName: 'Anime',
    targetFriendlyName: 'Obesity',
    degreesOfSeparation: 3,
    numberOfSearches: 2813,
    referenceText: 'Hacker News',
    referenceUrl: 'https://news.ycombinator.com/item?id=16468749',
  },
  {
    sourceFriendlyName: 'Age of Enlightenment',
    targetFriendlyName: 'Consumption of Tide Pods',
    degreesOfSeparation: 2,
    numberOfSearches: 2611,
    referenceText: 'Hacker News',
    referenceUrl: 'https://news.ycombinator.com/item?id=16468523',
  },
  {
    sourceFriendlyName: 'Anime',
    targetFriendlyName: 'Alt-right',
    degreesOfSeparation: 2,
    numberOfSearches: 1557,
    referenceText: 'Hacker News',
    referenceUrl: 'https://news.ycombinator.com/item?id=16469486',
  },
  {
    sourceFriendlyName: 'Lion Express',
    targetFriendlyName: 'Phinney',
    degreesOfSeparation: 7,
    numberOfSearches: 1380,
    referenceText: 'Hacker News',
    referenceUrl: 'https://news.ycombinator.com/item?id=16469620',
  },
  {
    sourceFriendlyName: 'Spud gun',
    targetFriendlyName: 'Sputnik-1 EMC/EMI lab model',
    degreesOfSeparation: null,
    numberOfSearches: 1274,
    referenceText: 'Hacker News',
    referenceUrl: 'https://news.ycombinator.com/item?id=16468643',
  },
  {
    sourceFriendlyName: 'Consumption of Tide Pods',
    targetFriendlyName: 'Age of Enlightenment',
    degreesOfSeparation: 3,
    numberOfSearches: 1160,
    referenceText: 'Hacker News',
    referenceUrl: 'https://news.ycombinator.com/item?id=16468945',
  },
  {
    sourceFriendlyName: 'Hargrave Military Academy',
    targetFriendlyName: 'Illiosentidae',
    degreesOfSeparation: 6,
    numberOfSearches: 763,
    referenceText: 'GitHub',
    referenceUrl:
      'https://github.com/jwngr/sdow/blob/master/docs/miscellaneous.md#noteworthy-searches',
  },
  {
    sourceFriendlyName: 'Six Degrees of Kevin Bacon',
    targetFriendlyName: 'Phinney',
    degreesOfSeparation: 6,
    numberOfSearches: 692,
    referenceText: 'GitHub',
    referenceUrl:
      'https://github.com/jwngr/sdow/blob/master/docs/miscellaneous.md#noteworthy-searches',
  },
  {
    sourceFriendlyName: 'John F. Kennedy',
    targetFriendlyName: 'Mikko Hyppönen',
    degreesOfSeparation: 3,
    numberOfSearches: 642,
    referenceText: 'Twitter',
    referenceUrl: 'https://twitter.com/mikko/status/968407596347641856',
  },
  {
    sourceFriendlyName: 'CT scan',
    targetFriendlyName: 'MetaFilter',
    degreesOfSeparation: 3,
    numberOfSearches: 548,
    referenceText: 'MetaFilter',
    referenceUrl: 'https://www.metafilter.com/172674/CT-Scan-Laser-Public-Domain-Metafilter',
  },
];

export const mostPopularPagesHeaders: string[] = ['Page Title', 'Number of Searches'];

interface MostPopularPage {
  readonly pageTitle: string;
  readonly numberOfSearches: number;
}

export const mostPopularPages: readonly MostPopularPage[] = [
  {pageTitle: 'Adolf Hitler', numberOfSearches: 12166},
  {pageTitle: 'Donald Trump', numberOfSearches: 4984},
  {pageTitle: 'Barack Obama', numberOfSearches: 2398},
  {pageTitle: 'Jesus', numberOfSearches: 2397},
  {pageTitle: 'Kevin Bacon', numberOfSearches: 1967},
  {pageTitle: 'Philosophy', numberOfSearches: 1925},
  {pageTitle: 'Elon Musk', numberOfSearches: 1790},
  {pageTitle: 'Bitcoin', numberOfSearches: 1448},
  {pageTitle: 'Albert Einstein', numberOfSearches: 1349},
  {pageTitle: 'Death Grips', numberOfSearches: 1242},
];

export const mostPathSearchesHeaders: string[] = [
  'Search',
  'Degrees of Separation',
  'Result Paths',
];

interface SearchResult {
  readonly sourceFriendlyName: string;
  readonly targetFriendlyName: string;
  readonly degreesOfSeparation: number;
  readonly numberOfPaths: number;
}

export const mostPathSearches: readonly SearchResult[] = [
  {
    sourceFriendlyName: 'List of shipwrecks in 1842',
    targetFriendlyName: 'Geographic coordinate system',
    degreesOfSeparation: 2,
    numberOfPaths: 1229,
  },
  {
    sourceFriendlyName: 'List of 20th-century writers',
    targetFriendlyName: 'List of sovereign states',
    degreesOfSeparation: 3,
    numberOfPaths: 7145,
  },
  {
    sourceFriendlyName: 'Alpaca',
    targetFriendlyName: 'Czech phonology',
    degreesOfSeparation: 4,
    numberOfPaths: 9705,
  },
  {
    sourceFriendlyName: 'Berchtesgaden',
    targetFriendlyName: 'Wrestle Kingdom 10',
    degreesOfSeparation: 5,
    numberOfPaths: 10277,
  },
  {
    sourceFriendlyName: 'Data monitoring switch',
    targetFriendlyName: 'Pirpainti (Vidhan Sabha constituency)',
    degreesOfSeparation: 6,
    numberOfPaths: 13131,
  },
  {
    sourceFriendlyName: '112th Ohio General Assembly',
    targetFriendlyName: 'Gunnar Knudsenfjella',
    degreesOfSeparation: 7,
    numberOfPaths: 7288,
  },
  {
    sourceFriendlyName: 'Generalized Tobit',
    targetFriendlyName: 'Phinney',
    degreesOfSeparation: 8,
    numberOfPaths: 6248,
  },
  {
    sourceFriendlyName: 'Lion Express',
    targetFriendlyName: 'Phinney',
    degreesOfSeparation: 9,
    numberOfPaths: 1246,
  },
  {
    sourceFriendlyName: 'Lion Express',
    targetFriendlyName: 'Excitation',
    degreesOfSeparation: 10,
    numberOfPaths: 262,
  },
  {
    sourceFriendlyName: 'Embleton',
    targetFriendlyName: 'McCombie',
    degreesOfSeparation: 11,
    numberOfPaths: 142,
  },
];
