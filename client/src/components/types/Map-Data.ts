export type Node = {
  children: string[];
  mainKnot?: boolean;
  resources?: string[];
};

export interface Nodes {
  [key: string]: Node;
}
