export type Node = {
  comments: string[];
  title: string;
  goalDate: number;
  status: 'Pending' | 'In-Work' | 'Done';
  recommended?:
    | 'option'
    | 'recommended'
    | 'not-recommended'
    | 'not-strict'
    | 'not-recommended-option'
    | 'not-recommended-none'
    | 'none';
  children: string[];
  mainKnot?: boolean;
  resources?: string[];
  importance?: number;
};

export interface Nodes {
  [key: string]: Node;
}
