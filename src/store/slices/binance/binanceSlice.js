import { createSlice } from '@reduxjs/toolkit'
import { client } from '@lib/api/client'
import Binance from '@lib/api/binance'

const binance = new Binance({
  keys: {
    api: process.env.REACT_APP_BINANCE_API_KEY,
    secret: process.env.REACT_APP_BINANCE_SECRET_KEY
  }
})

export const binanceSlice = createSlice({
  name: 'binance',
  initialState: {
    endpoints: {
      base: 'https://api.binance.com',
      wallet: {
        accountSnapshot: 'sapi/v1/accountSnapshot'
      }
    },
    // Wallet Balances
    errorRequesingAccountWalletBalances: false,
    requestingAccountWalletBalances: false,
    account: {
      wallet: {
        balances: {
          totalAssetOfBtc: "0.00273419",
          spot: [
            {
              "asset": "ATA",
              "free": "0.0081",
              "locked": "0"
            },
            {
              "asset": "AUD",
              "free": "0",
              "locked": "0"
            },
            {
              "asset": "BAKE",
              "free": "0",
              "locked": "0"
            },
            {
              "asset": "BNB",
              "free": "0",
              "locked": "0"
            },
            {
              "asset": "CAKE",
              "free": "0",
              "locked": "0"
            },
            {
              "asset": "CHR",
              "free": "0",
              "locked": "0"
            },
            {
              "asset": "DEXE",
              "free": "8.85824",
              "locked": "0"
            },
            {
              "asset": "DOT",
              "free": "0",
              "locked": "0"
            },
            {
              "asset": "MATIC",
              "free": "0",
              "locked": "0"
            },
            {
              "asset": "RUNE",
              "free": "0",
              "locked": "0"
            },
            {
              "asset": "USDT",
              "free": "1.22084947",
              "locked": "0"
            },
            {
              "asset": "XRP",
              "free": "0",
              "locked": "0"
            },
            {
              "asset": "XVG",
              "free": "0.2692",
              "locked": "0"
            },
            {
              "asset": "XVS",
              "free": "0",
              "locked": "0"
            }
          ]
        }
      }
    }
  },
  reducers: {
    setErrorRequestingAccountWalletBalances: (state, action) => {
      state.errorRequestingAccountWalletBalances = action.payload
    },
    setRequestingAccountWalletBalances: (state, action) => {
      state.requestingAccountWalletBalances = action.payload
    },
    setWalletSpotBalance: (state, action) => {
      state.wallet.balances.spot = action.payload
    },
  }
})

const {
  setRequestingAccountWalletBalances,
  setErrorRequestingAccountWalletBalances,
  setWalletSpotBalance,
} = binanceSlice.actions

export const loadDailyAccountSnapshotSPOT = (_) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      await dispatch(setRequestingAccountWalletBalances(true))

      client.balance((error, balances) => {
        if (error) {
          console.error(error)
          reject()
        }

        dispatch(setWalletSpotBalance(balances.data))
        resolve()
      })
      resolve()
    } catch (e) {
      dispatch(setErrorRequestingAccountWalletBalances(false))
    } finally {
      dispatch(setRequestingAccountWalletBalances(false))
    }
  })
}

export const checkSystemStatus = (_) => (dispatch, getState) => {
  binance.checkSystemStatus()
    .then((result) => {
      debugger
    })
    .catch((error) => {
      debugger
      console.error(error.statusText)
    })
}

export default binanceSlice.reducer
