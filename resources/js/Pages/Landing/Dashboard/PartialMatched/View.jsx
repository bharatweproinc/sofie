import { Landing } from "@/Layouts/Landing";
import { Box, Typography } from "@mui/material";

function partialMatched ({detail}) {
    console.log(detail,"::detail")
    return (
        // <Landing>
            <Box  sx={{ height:"100vh" }}>
                <Typography>Companies Partial Matched Coming Soon ...</Typography>
            </Box>
        // </Landing>
    )
}

export default partialMatched;
