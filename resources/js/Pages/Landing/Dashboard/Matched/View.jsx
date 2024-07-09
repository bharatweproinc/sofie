import SideBar from "@/Components/Dependent/SideBar";
import { Box, Typography } from "@mui/material";

function matched () {
    return (
        <SideBar>
            <Box p={8}>
                <Typography>Companies Matched Coming Soon..</Typography>
            </Box>
        </SideBar>
    )
}

export default matched;