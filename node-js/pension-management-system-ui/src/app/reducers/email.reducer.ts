import { ActionParent } from "../session/email.actions";
import { Todo } from "../entity/Todo";
import { EmailActionType } from "../shared/enum/email-action-types-enum";

const initialState: Todo[] = [
    {
        email: ""
    }
]

export function EmailReducer(state = initialState, action: ActionParent) {
    switch (action.type) {
        case EmailActionType.Add:
            return [...state, action.payload];
        case EmailActionType.Remove:
            let newState = [...state];
            newState.splice(action.payload, 1);
            return newState;
        default:
            return state;
    }
}