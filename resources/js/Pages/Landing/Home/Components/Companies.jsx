import { Landing } from "@/Layouts/Landing";
import { Grid, Typography } from "@mui/material";
import Constants from "../Constants";
import FeatureCard from "./FeatureCard";

function BrowseCompanies () {
    return (
        <Landing>
            <Typography sx={{ height: '95px' }}></Typography>
            <Grid container spacing={{ lg: 4, sm: 1 }} px={{ lg: 10, md: 5, xs: 2 }} pb={{ lg: 10, md: 5, xs: 2 }}>
					{Constants.FeatureCard.map((item, key) => (
						<Grid key={key} item xs={12} sm={4} my={{sm:0, xs:2}}>
							<FeatureCard item={item} />
						</Grid>
					))}
				</Grid>
        </Landing>
    )
}

export default BrowseCompanies;