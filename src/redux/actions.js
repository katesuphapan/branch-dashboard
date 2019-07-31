import API from "../services/API";

const ActionType = {
    SHOW_BRANCH_DATA: "SHOW_BRANCH_DATA",
    REQUEST_INIT_DATA: "REQUEST_INIT_DATA",
    REQUEST_INIT_DATA_SUCCESS: "REQUEST_INIT_DATA_SUCCESS",
    REQUEST_INIT_DATA_FAILED: "REQUEST_INIT_DATA_FAILED"
}

const showBranchData = branchId => {
    return {
        type: ActionType.SHOW_BRANCH_DATA,
        payload: branchId
    }
}

const requestInitData = () => {
    console.log('กำลังส่งข้อมูลจาก api');
    //async await
    return async (dispatch) => {
        try {
            let response = await API.get('./branch.json');
            console.log(response);
            dispatch({ type: ActionType.REQUEST_INIT_DATA_SUCCESS, payload: response.data })

        } catch (error) {
            console.log(error);
            dispatch({ type: ActionType.REQUEST_INIT_DATA_FAILED, payload: error })
        }
    }
}

export default {
    requestInitData,
    showBranchData,
    ActionType
}