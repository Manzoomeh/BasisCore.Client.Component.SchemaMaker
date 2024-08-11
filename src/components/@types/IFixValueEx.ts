import { IFixValue } from "basiscore";
export interface IFixValueEx extends IFixValue {
  priority: number;
  valueData?: {
    id: number;
    value: string;
    status: string;
  };
}
