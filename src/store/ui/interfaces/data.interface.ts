export interface IModal<T = any> {
  data: T | null;
  coordinates?: { x: number; y: number };
  open: boolean;
}

export interface IUIData {
  cartModal: IModal;
}

export type IUIState = IUIData;
