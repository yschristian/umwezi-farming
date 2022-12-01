import { publicRequest } from "../../RequestMethod";
import { addPartnerStart, addPartnerSuccess, addPartnerFailure } from "../PartnerRedux";

export const addPartner = async (partner,dispatch)=>{
    dispatch(addPartnerStart())
    try {
        const res = await publicRequest.post("/request/create", partner)
        dispatch(addPartnerSuccess(res.data))
    } catch (error) {
        dispatch(addPartnerFailure())
    }

}