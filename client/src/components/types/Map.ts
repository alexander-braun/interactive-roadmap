export interface Map {
  title: string;
  finished?: boolean;
  id: string;
  importance?: number;
  goalDate?: string;
  comments: string[];
  resources?: string[];
  recommended?:
    | 'option'
    | 'recommended'
    | 'not-recommended'
    | 'not-strict'
    | 'not-recommended-option'
    | 'not-recommended-none'
    | 'none';
  children: Map[];
  mainKnot?: boolean;
}
