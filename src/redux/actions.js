const ActionType = {
    SHOW_BRANCH_DATA: "SHOW_BRANCH_DATA"
}

const showBranchData = branchId => {
    return {
        type: ActionType.SHOW_BRANCH_DATA,
        payload: branchId
    }
}

export default {

    ActionType,
    showBranchData
}