import CurrentBalance from '@components/CurrentBalance'
import { Grid } from "@material-ui/core";

function Home() {
 return (
   <Grid container>
    <Grid item xs={12}>
      <CurrentBalance />
    </Grid>
   </Grid>
 )
}

export default Home
