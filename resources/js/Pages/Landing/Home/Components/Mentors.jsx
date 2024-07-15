import { Landing } from "@/Layouts/Landing";
import { Grid, Typography } from "@mui/material";
import Constants from "../Constants";
import ImageCard from "./ImageCard";

function FindMentors () {
    return (
      <Landing>
            <Typography sx={{ height: '95px' }}></Typography>
            <Grid container spacing={4} px={{ lg: 8, md: 4, xs: 2 }} pb={{ md: 10, xs: 5 }}>
               {Constants.ImageCard.map((item, key) => (
						<Grid item xs={12} sm={3} key={key}>
							<ImageCard item={item} />
						</Grid>
					))}
            </Grid>
      </Landing>
    )
}

export default FindMentors;