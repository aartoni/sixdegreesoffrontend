import {API_URL} from './resources/constants';
import {
  ShortestPathsApiResponse,
  ShortestPathsErrorResponse,
  WikipediaPage,
} from './types';

interface FetchShortestPathsResponse {
  readonly paths: readonly WikipediaPage[][];
  readonly sourcePageTitle: string;
  readonly targetPageTitle: string;
  readonly isSourceRedirected: boolean;
  readonly isTargetRedirected: boolean;
}

export async function fetchShortestPaths({
  sourcePageTitle,
  targetPageTitle,
}: {
  readonly sourcePageTitle: string;
  readonly targetPageTitle: string;
}): Promise<FetchShortestPathsResponse> {
  const params = new URLSearchParams({source: sourcePageTitle, target: targetPageTitle});
  const response = await fetch(`${API_URL}/paths?${params.toString()}`);

  if (!response.ok) {
    const data = (await response.json()) as ShortestPathsErrorResponse;
    throw new Error(`Failed to find shortest path: ${data.error}`);
  }

  const data = (await response.json()) as ShortestPathsApiResponse;

  return {
    paths: data.paths,
    sourcePageTitle: data.sourcePageTitle,
    targetPageTitle: data.targetPageTitle,
    isSourceRedirected: data.isSourceRedirected,
    isTargetRedirected: data.isTargetRedirected,
  };
}
