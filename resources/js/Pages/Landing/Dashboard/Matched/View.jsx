import SideBar from "@/Components/Dependent/SideBar";
import { Landing } from "@/Layouts/Landing";
import { Box, Typography } from "@mui/material";

function matched () {
    return (
        <Landing>
            <Box p={8}>
                <Typography>Companies Matched Coming Soon..</Typography>
            </Box>
        </Landing>
    )
}

export default matched;
