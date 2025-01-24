import {API_URL} from './resources/constants';
import {ShortestPathsApiResponse, ShortestPathsErrorResponse, WikipediaPage} from './types';

interface FetchShortestPathsResponse {
  readonly paths: readonly WikipediaPage[][];
  readonly sourceFriendlyName: string;
  readonly targetFriendlyName: string;
  readonly isSourceRedirected: boolean;
  readonly isTargetRedirected: boolean;
}

export async function fetchShortestPaths({
  source,
  target,
}: {
  readonly source: string;
  readonly target: string;
}): Promise<FetchShortestPathsResponse> {
  const params = new URLSearchParams({source, target});
  const response = await fetch(`${API_URL}/paths?${params.toString()}`);

  if (!response.ok) {
    const data = (await response.json()) as ShortestPathsErrorResponse;
    throw new Error(`Failed to find shortest path: ${data.error}`);
  }

  const data = (await response.json()) as ShortestPathsApiResponse;

  return {
    paths: data.paths,
    sourceFriendlyName: data.sourceFriendlyName,
    targetFriendlyName: data.targetFriendlyName,
    isSourceRedirected: data.isSourceRedirected,
    isTargetRedirected: data.isTargetRedirected,
  };
}
