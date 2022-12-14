import { makeCartNull } from "../CartRedux";

const removeCart = async (dispatch) => {
    try {
        await dispatch (makeCartNull())
    } catch (error) {

    }
}

export default removeCart
