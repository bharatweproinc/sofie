import { Landing } from "@/Layouts/Landing";
import {
    Avatar,
    Box,
    Button,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import { Link } from "@inertiajs/react";
import "./style.scss";

const Reviewdata = ({detail}) => {

    return (
        <Landing detail={detail}>
            <Box className="company_detail_review">
                <Typography sx={{ height: "65px" }}></Typography>
                <Grid item xs={12}  px={5} pt={4} pb={0}>
                    <Typography
                        fontWeight={700}
                        fontSize={"28px"}
                        color={"#223049"}
                    >
                        Company Details
                    </Typography>
                </Grid>
                <Box
                    sx={{ py: 3, pl: 2 }}
                    className="company_detail_review_title"
                >
                    <Grid container sx={{ pl: 3 }}>
                        <Grid item xs={12} mt={2}>
                            <Typography
                                variant="h6"
                                // pl={3}
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Profile Photo
                            </Typography>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://s3-alpha-sig.figma.com/img/7d26/f12d/c9ef78ed454aee26b7314c1775c9aee2?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDuz3IKfyKIHO73haUiB3hVIxn-cpwgeF7CSbHhnFciYE8i2LRI2b2l4UFjC6W~GtnMNBQ~gXqJ8XwnEOskQxXLxdeqXYd77vuhNJo1ZwjeP1dMJ5HWF7aZB4iGs59BLUKNfbs3dtKLAH2v6mHgL2xAfeOfmOTlVM-l-5FQXpTRUYmbWDEDUK1jgHfMgWNpql-X727CwEvvxR~LT0L90OoTOq3mJglPxIubQPlVoLfOR5k-SScEpNbrxh3rl1IZux6zrlrLF~UcZ~-zJqx~hL9dRY7gTg8QYQA-FxerOyCFeJDyVNtaKnC2cn2aD6Ee1EMU8vWJL8tKZHGpZHKoLnw__"
                                sx={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    border: "2px solid black",
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container sx={{ padding: "24px" }}>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Company Name
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.company_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Email
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.user.email}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                User Name
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.user.name}
                            </Typography>
                        </Grid>

                        <Grid itemxs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Company UEN
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.company_uen}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Contact Name
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.contact_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Mobile Number
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.user.phone}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Position In Company
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.position}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Year Founded
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.founded_year}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Team Size, Number Of Employees
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.team_size}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Current Revenue Size
                            </Typography>
                            <Typography>
                                {detail.current_revenue}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Current Customers Base Size
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.current_customers_base_size}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Industry sector
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.industry_sector}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Functional Area 1
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.functional_area_1}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Functional Area 2
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.functional_area_2}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={600}
                                color={"#7C7C7C"}
                            >
                                Functional Area 3
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.functional_area_3}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3} sm={6} my={2}>
                            <Typography
                                color={"#7C7C7C"}
                                fontSize={"18px"}
                                fontWeight={600}
                            >
                                Current problem
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.current_problem}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} my={2} pr={15}>
                            <Typography
                                color={"#7C7C7C"}
                                fontSize={"18px"}
                                fontWeight={600}
                            >
                                Additional Information
                            </Typography>
                            <Typography fontSize={"14px"}>
                                {detail.additional_information}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Grid
                    item={true}
                    xs={12}
                    mb={4}
                    mt={3}
                    textAlign={"center"}
                    className="edit_btn"
                >
                    <Link href={route("landing.companydetail",detail.user.id)}>
                        <Button
                            sx={{
                                textTransform: "capitalize",
                                padding: "10px 32px",
                                backgroundColor: "#117B9E",
                            }}
                            type="submit"
                            variant="contained"
                        >
                            Edit
                        </Button>
                    </Link>
                </Grid>
            </Box>
        </Landing>
    );
};

export default Reviewdata;
