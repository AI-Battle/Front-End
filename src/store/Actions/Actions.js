import * as ACTIONTYPES from './ActionType';

export const addMember = (newMember) => {
    return {
        type: ACTIONTYPES.ADD_MEMBER,
        newMember
    }
}

export const removeMember = (id) => {
    return {
        type: ACTIONTYPES.REMOVE_MEMBER,
        id
    }
}