import { Box } from "@mui/material"
import AssetcatalogueAsset from './AssetsCatalogueAsset'

const assets = [
  {
    label: 'Bitcoin',
    coin: 'BTC',
    price: 18245.4,
    currency: 'USD',
    difference: 2.73,
    differenceType: 'positive'
  }
]

const assetItems = assets.map(asset => <AssetcatalogueAsset asset={asset}/>)

export default function AssetCatalogueList() {
  return (
    <Box>
      { assetItems }
    </Box>
  )
}
