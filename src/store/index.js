import { configureStore } from '@reduxjs/toolkit'
import binanceReducer from '../store/slices/binance/binanceSlice'

export default configureStore({
  reducer: {
    binance: binanceReducer
  }
})
