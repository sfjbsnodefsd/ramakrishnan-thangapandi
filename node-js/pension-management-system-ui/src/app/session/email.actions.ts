import { Action } from "@ngrx/store";
import { EmailActionType } from "../shared/enum/email-action-types-enum";

export class ActionParent implements Action {
    type: any;
    payload: any;
}

export class EmailAdd implements ActionParent {
    type = EmailActionType.Add;
    constructor(public payload: any) { }
}
export class EmailRemove implements ActionParent {
    type = EmailActionType.Remove;
    constructor(public payload: any) { }
}