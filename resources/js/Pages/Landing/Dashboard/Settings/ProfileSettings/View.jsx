import SideBar from "@/Components/Dependent/SideBar";
import { Landing } from "@/Layouts/Landing";
import { Box, Typography } from "@mui/material";
const user = {
    id : 12,
    user_role : 'admin'
}

function profileSettings () {
    return (
         <Landing auth={user}>
            <Box p={2}>
                <Typography>Profile Setting Coming Soon....</Typography>
            </Box>
         </Landing>
    )
}

export default profileSettings;
