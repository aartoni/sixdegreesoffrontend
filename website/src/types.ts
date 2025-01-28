export type NodeId = string;

export interface Node {
  readonly id: NodeId;
  readonly label: string;
  readonly url: string;
  readonly description?: string;
  readonly thumbnailUrl?: string;
}

export interface ShortestPathsApiResponse {
  readonly paths: readonly Node[][];
  readonly sourceLabel: string;
  readonly targetLabel: string;
  readonly isSourceRedirected: boolean;
  readonly isTargetRedirected: boolean;
}

export interface ShortestPathsErrorResponse {
  readonly error: string;
}

export interface HomeLink {
  readonly href: string;
  readonly name: string;
}
