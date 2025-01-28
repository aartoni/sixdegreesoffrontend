import {API_URL} from './resources/constants';
import {Node, ShortestPathsApiResponse, ShortestPathsErrorResponse} from './types';

interface FetchShortestPathsResponse {
  readonly paths: readonly Node[][];
  readonly sourceLabel: string;
  readonly targetLabel: string;
  readonly isSourceRedirected: boolean;
  readonly isTargetRedirected: boolean;
}

export async function fetchShortestPaths(
  source: string,
  target: string
): Promise<FetchShortestPathsResponse> {
  const params = new URLSearchParams({source, target});
  const response = await fetch(`${API_URL}/paths?${params.toString()}`);

  if (!response.ok) {
    const data = (await response.json()) as ShortestPathsErrorResponse;
    throw new Error(`Failed to find shortest path: ${data.error}`);
  }

  const data = (await response.json()) as ShortestPathsApiResponse;

  return {
    paths: data.paths,
    sourceLabel: data.sourceLabel,
    targetLabel: data.targetLabel,
    isSourceRedirected: data.isSourceRedirected,
    isTargetRedirected: data.isTargetRedirected,
  };
}
