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
    fetching: {
      account_wallet_balances: false
    },
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
    setFetchingAccountWalletBalances: (state, action) => {
      state.fetching.account_wallet_balances = action.payload
    },
    setWalletSpotBalance: (state, action) => {
      state.wallet.balances.spot = action.payload
    },
  }
})


export const { setFetchingAccountWalletBalances, setWalletSpotBalance } = binanceSlice.actions

export const loadDailyAccountSnapshotSPOT = (_) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      // client.balance((error, balances) => {
      //   if (error) {
      //     console.error(error)
      //     reject()
      //   }
      //
      //   console.info("balances()", balances)
      //   // dispatch(setWalletSpotBalance(snapshot.data))
      //   resolve()
      // })

    } catch (e) {
      console.error(e.message)
      setTimeout(function() {
        reject()
      }, 3000)
    }
  })
}

export const checkSystemStatus = (_) => (dispatch, getState) => {
  debugger

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
