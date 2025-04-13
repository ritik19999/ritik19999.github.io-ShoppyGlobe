import {configureStore} from "@reduxjs/toolkit"
import cartReduder from "./cartSlice"
const appStore=configureStore({
  reducer:{
    cart:cartReduder
  }
})
export default appStore;