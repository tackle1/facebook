import *  as UserAPI from "../../apis/userRequest";

export const getDataUser = () => async (dispatch) => {
    dispatch({ type: "USER_START" }) // load api
    try {
        const respone = await UserAPI.getUser();
        dispatch({ type: "USER_SUCCESS", payload: respone });
    } catch (error) {
        dispatch({ type: "USER_FAIL" });
    }
}