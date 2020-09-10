export interface Action {
  type: ActionType;
  item?: object; // ADD_TO_BASKET
}

export enum ActionType {
  ADD_TO_BASKET,
  SET_USER,
}

export interface State {
  user: object | null;
  basket: object[];
}

export const initialState: State = {
  user: null,
  basket: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};

export default reducer;
