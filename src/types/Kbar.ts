import { Action } from "kbar";

export interface ExtendedAction extends Action {
  metadata?: {
    category?: string;
    path?: string;
  };
}
