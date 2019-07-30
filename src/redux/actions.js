const ActionType = {
    SHOW_BRANCH_DATA: "SHOW_BRANCH_DATA"
}

const showBeanchData = branchId => {
    return {
        type: ActionType.SHOW_BRANCH_DATA,
        payload: branchId
    }
}

export default {

    ActionType,
    showBeanchData
}