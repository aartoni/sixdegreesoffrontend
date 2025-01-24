export type WikipediaPageId = string;

export interface WikipediaPage {
  readonly id: WikipediaPageId;
  readonly label: string;
  readonly url: string;
  readonly description?: string;
  readonly thumbnailUrl?: string;
}

export interface ShortestPathsApiResponse {
  readonly paths: readonly WikipediaPage[][];
  readonly sourceLabel: string;
  readonly targetLabel: string;
  readonly isSourceRedirected: boolean;
  readonly isTargetRedirected: boolean;
}

export interface ShortestPathsErrorResponse {
  readonly error: string;
}

export interface BlogPostInfo {
  readonly id: string;
  readonly date: string;
  readonly title: string;
  readonly author: string;
  readonly description: string;
}
