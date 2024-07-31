import { Landing } from "@/Layouts/Landing";
import { Box, Typography } from "@mui/material";

const user = {
    id : 12,
    user_role : 'admin'
}

function accountSettings () {
    return (
        <Landing auth={user}>
            <Box p={2}>
                <Typography>Account Settings Coming Soon..</Typography>
            </Box>
         </Landing>
    )
}

export default accountSettings;
