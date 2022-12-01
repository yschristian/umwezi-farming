import { configureStore } from "@reduxjs/toolkit";
import CartRedux from "./CartRedux";
import PartnerRedux from "./PartnerRedux";

export default configureStore({
    reducer:{
        cart:CartRedux,
        partner:PartnerRedux
    }
})