import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import headerRight from '../../../Assets/Images/header-right.png'
import joinCommunity from '../../../Assets/Images/join-community-bg.png'
import voloplay from '../../../Assets/Images/voloplay.png'
import turtle from '../../../Assets/Images/turtle.png'
import nuevocar from '../../../Assets/Images/nuevocar.png'
import joinCommunityMember1 from '../../../Assets/Images/join-community-member1.png'
import joinCommunityMember2 from '../../../Assets/Images/join-community-member2.png'
import { Card, Grid, MobileStepper, Paper, useMediaQuery, useTheme } from '@mui/material';
import Button from '@/Components/Singleton/Button';
import { Landing } from '@/Layouts/Landing';
import theme from '@/Themes/Color';
import roundedImage from '../../../Assets/Images/Rectangle 28.png'
import ImageCard from './Components/ImageCard';
import Constants from './Constants';
import Guide from './Components/Guide';
import FeatureCard from './Components/FeatureCard';
import Testimonial from './Components/Testimonial';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import "./style.scss"
import { Link } from '@inertiajs/react';
import ImageCarousel from './Components/ImageCorousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function DrawerAppBar({list}) {
	const [selectedRole, setSelectedRole] = React.useState('entrepreneur');

	const themes = useTheme()
	const isMobile = useMediaQuery(themes.breakpoints.down('sm'));


	// Slick slider settings
	const settings = {
		dots: true,
		infinite: true,
		// speed: 500,
		slidesToShow: isMobile ? 1 : 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	};

	const settingsCompany = {
		dots: true,
		infinite: true,
		slidesToShow: isMobile ? 1 : 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	  };

	  const settingsTestimonial = {
		dots: true,
		infinite: true,
		slidesToShow: isMobile ? 1 : 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	  };


	const [isReadMore, setIsReadMore] = React.useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    };
	return (
		<>
			<Landing>
				<CssBaseline/>
				<Grid container spacing={2} mt={{ xs: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
					<Grid item sm={6}>
						<Box pl={{ lg: 15, md: 5, sm: 2 }} p={{ xs: 2 }}>
							<Typography sx={{
								fontSize: { lg: "58px", md: '32px', sm: '24px', xs: '28px' },
								fontWeight: '700 !important',
							}}
								variant="body1"
								color="initial"
							>
                                {list.banner.banner_title}
							</Typography>
							<Typography className='leading-3' sx={{
								fontSize: '16px',
								color: '#252525'
							}}
								variant="body1"
								color="initial"
							>
                                {list.banner.banner_description}
                            </Typography>
							<Box className="flex gap-5 mt-10">
								<Button component={Link} variant="contained" href={route('landing.signup', { role: 'entrepreneur' })} onClick={() => setSelectedRole('entrepreneur')} className="w-full">
									Sign Up as SME
								</Button>
								<Button component={Link}  href={route('landing.signup', { role: 'mentor' })} variant="outlined" onClick={() => setSelectedRole('mentor')} className="w-full">
									Sign Up as Mentor
								</Button>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={6} sx={{ position: 'relative', height: { lg: '693px', md: '500px', sm: '400px' } }}>
						<ImageCarousel images={list.banner.banner_images} />
						<Box
						sx={{
							position:"absolute",
							backgroundColor:'#ffff',
							top:'0',
							left:'11px',
							boxShadow: {sm:'-1px 20px 20px 20px #ffff;', xs:'-1px 20px 20px 20px #ffff'},
							width: {lg:'30px', md:'30px', sm:'30px', xs:'-webkit-fill-available'},
							height: {lg:'100%', md:'100%', sm:'100%', xs:'30px'}
						}}
						></Box>
					</Grid>
				</Grid>

				<Box className="relative" bgcolor={theme.color[import.meta.env.VITE_SELECTED_THEME].primary}
					p={{ lg: 10, md: 5, sm: 2 }} mt={{ sm: 4, md: 0 }}
				>
					<Grid container spacing={{ lg: 4, md: 2, sm: 1, xs: 2 }} px={{ lg: 5, sm: 2, xs: 3 }} py={6}>
						{Constants.Benefits.map((item, index) => (
							<Grid item xs={12} sm={3} key={index}>
								<Card className='custom_padding' variant="outlined" sx={{
									height : {sm : 300, md : '100%', lg : '100%'},
									px : 2,
									py : 4,
									borderRadius: '15px',
								}}
								>
									{item.icon}
									<Typography
										variant="body1"
										mt={2}
										color={theme.color[import.meta.env.VITE_SELECTED_THEME].secondary}
										fontWeight="bold"
									>
										{item.title}
									</Typography>
									<Typography fontSize={{ lg: '16px', sm: '14px' }}
										mt={1}
										variant="body1"
										color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
									>
										{item.description}
									</Typography>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>

				<Grid container py={{ lg: 10, md: 5, sm: 2, xs: 2 }} px={{ lg: 15, md: 6, sm: 3, xs: 2 }}
					sx={{
						bgcolor: theme.color[import.meta.env.VITE_SELECTED_THEME].greyBackground
					}}>
					<Grid item xs={12} sm={6} >
						<img className='w-full h-100 object-cover rounded-lg' src={roundedImage} alt="description" />
					</Grid>

					<Grid container p={{ lg: 4, xs: 1 }} item xs={12} sm={6}>
						<Typography sx={{
							fontSize: { xs: '32px', sm: '24px', md: '32px' },
							fontWeight: '700 !important',
						}}
							variant="body1"
							color="initial"
						>
                            {list.mission.mission_title}
						</Typography>
						<Typography mt={{ lg: 3 }}
							color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
							variant="body1"
						>
							{isReadMore ? list.mission.mission_description : list.mission.mission_description.slice(0, 300)}
                        </Typography>
						<Button onClick={() => toggleReadMore()} variant="contained" sx={{ mt: 2, height : '40px' }}>
							{isReadMore === true ? 'Read less' : "Read more"}
						</Button>
					</Grid>
				</Grid>
				<Grid container py={10} px={{ lg: 12, md: 4 }} >
					<Grid item xs={12}>
						<Typography sx={{
							fontSize: { xs: '32px', sm: '24px', md: '32px' },
							fontWeight: '700 !important',
						}}
							textAlign={'center'}
							variant="body1"
							color="initial"
						>
							Featured Mentors
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography textAlign={'center'} color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor} variant="subtitle1">
							Meet some of our exceptional mentors who bring a wealth of experience and expertise to <br /> guide you on your entrepreneurial journey
						</Typography>
					</Grid>
				</Grid>

				 <Grid container spacing={2} pl={{ lg: 5, md: 2, sm: 1 }}>
					<Box sx={{ width: '100%', pl: 2, py: 4 }}>
						<Slider {...settings}>
						{list && list.mentors.list.mentor.map((item, index) => {
							return	<Box key={index} sx={{ px: 2 }} py={{ sm: 2 }}>
							<ImageCard item={item} />
							</Box>
						}
						)}
						</Slider>
					</Box>
				</Grid>
				<Grid container bgcolor={theme.color[import.meta.env.VITE_SELECTED_THEME].primary}
					py={{ lg: 10, md: 5, xs: 2 }}
					px={{ lg: 15, md: 6, xs: 3 }}
					textAlign={"center"}>
					<Grid item xs={12} pb={10}>
						<Typography textAlign={'center'} variant="body1" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white}>
							How It Works
						</Typography>
						<Typography textAlign={'center'} variant="h5" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white} fontWeight={'bold'}>
							Step-by-Step Guide
						</Typography>
					</Grid>

					<Grid className='border-dashedd' container sx={{ position: 'relative' }}>
						{Constants.guide.map((item, key) => (
							<Grid item sm={3} key={key}>
								<Guide item={item} />
							</Grid>
						))}
						{/* <Box className="dashed-border" sx={{
						}}></Box> */}
					</Grid>

				</Grid>

				<Grid container py={{ lg: 10, sm: 1 }} px={{ lg: 7, md: 3, sm: 1 }}>
					<Grid item xs={12}>
						<Typography
							sx={{
								fontSize: { xs: '32px', sm: '24px', md: '32px' },
								fontWeight: '700 !important',
							}}
							textAlign={'center'}
							variant="body1"
							color="initial"
						>
							Featured SME
						</Typography>
					</Grid>
					<Grid item xs={12} py={2}>
						<Typography textAlign={'center'} color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor} variant="subtitle1">
							Discover some of the successful Small Medium Enterprises (SMEs) that have thrived with <br /> the help of our mentorship program.
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={2} pl={{ lg: 5, md: 2, sm: 1 }}>
					<Box sx={{ width: '100%', pl: 2, py: 4 }}>
						<Slider {...settingsCompany}>
						{list && list.companies.list.company.map((item, index) => {
							return	<Box key={index} sx={{ px: 2 }} py={{ sm: 2 }}>
							<FeatureCard item={item}  />
							</Box>
						}
						)}
						</Slider>
					</Box>
				</Grid>

				<Box className="relative">
					<img
						style={{
							position: 'absolute',
							zIndex: '-1',
							width: '100%',
							height: '100%'
						}}
						src={joinCommunity}
					></img>
					<Grid pb={4} container py={{ lg: 10, md: 5, sm: 2 }} px={{ lg: 15, md: 6, sm: 3 }}>
						<Grid item xs={12}>
							<Typography sx={{
								fontSize: { xs: '32px', sm: '24px', md: '32px' },
								fontWeight: '700 !important',
							}}
								textAlign={'center'}
								variant="body1"
								color="initial"
							>
								{list.community.community_title}
							</Typography>
						</Grid>
						<Grid item xs={12} my={1}>
							<Typography textAlign={'center'} color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor} variant="subtitle1">
                            {list.community.community_description}
							</Typography>
						</Grid>

						<Grid container spacing={2} py={{ lg: 10, md: 5, sm: 2 }} sx={{ justifyContent: 'space-between' }}>
							<Grid item xs={12} sm={4} >
								<Box className="flex justify-center px-16 sm:px-0">
									<img className='w-full' src={joinCommunityMember1} alt="description" />
								</Box>
							</Grid>
							<Grid item xs={12} sm={7}>
								<Typography
									textAlign={{ xs: 'center', sm: 'left' }}
									sx={{
										fontSize: { xs: '18px', md: '28px' },
										fontWeight: '700',
									}}
									variant="body1"
								>
									{list.community.become_mentor_title}
								</Typography>
								<Typography
									textAlign={{ xs: 'center', sm: 'left' }}
									mt={3}
									color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
									variant="body1"
								>
                                {list.community.become_mentor_description}
								</Typography>
								<Typography
									textAlign={{ xs: 'center', sm: 'left' }}
									mt={3}
									color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
									variant="body1"
								>
                                    </Typography>
								<Box mt={3} display={{ xs: 'flex', sm: 'block' }} justifyContent={`center`}>
									<Button component={Link} href={route('landing.signup', { role: 'mentor' })}  variant="contained">
										Be A Mentor
									</Button>
								</Box>
							</Grid>
						</Grid>

						<Grid
							container
							spacing={2}
							mt={{ sm: 2, xs: 2 }}
							flexDirection={{ xs: 'column-reverse', sm: 'row' }}
							display={{ sm: "flex", xs: "contents" }}
							height={{ sm: "100%", xs: "auto" }}
							py={{ lg: 10, md: 5, sm: 2 }}
							sx={{
								justifyContent: 'space-between',
							}}
						>
							<Grid item xs={12} sm={7} order={{ xs: 2, sm: 1 }}>
								<Typography
									textAlign={{ xs: 'center', sm: 'left' }}
									sx={{
										fontSize: { xs: '18px', md: '28px' },
										fontWeight: '700',
									}}
									variant="body1"
								>
									{list.community.become_partner_title}
								</Typography>
								<Typography
									textAlign={{ xs: 'center', sm: 'left' }}
									mt={3}
									color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
									variant="body1"
								>
                                {list.community.become_partner_description}
								</Typography>
								<Typography
									textAlign={{ xs: 'center', sm: 'left' }}
									mt={3}
									color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
									variant="body1"
								>
								</Typography>
								<Box mt={3} display={{ xs: 'flex', sm: 'block' }} justifyContent={`center`}>
									<Button variant="contained" component={Link} href={route('landing.signup')}>
										Improve Your Business
									</Button>
								</Box>
							</Grid>
							<Grid item xs={12} sm={4} order={{ xs: 1, sm: 2 }}>
								<Box className="flex justify-center px-16 sm:px-0">
									<img className='w-full' src={joinCommunityMember2} alt="description" />
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Box>

				{/* <Grid container pt={10}> */}
					{/* <Grid item xs={12} sm={12} md={12} lg={12}>
						<Typography sx={{
							fontSize: { xs: '32px', sm: '24px', md: '32px' },
							fontWeight: '700 !important',
						}}
							textAlign={'center'}
							variant="body1"
							color="initial"
						>
							Featured Mentors
						</Typography>
					</Grid> */}
				{/* </Grid> */}

				{/* <Grid container spacing={{ lg: 4, md: 2, sm: 1, xs: 1 }} py={{ lg: 10, md: 5, sm: 2, xs: 5 }} px={{ lg: 15, md: 6, sm: 2, xs: 2 }} >
					<Grid item xs={12} sm={4}>
						<Paper elevation={2} sx={{ height: '100%', width: '100%', pb: 2 }}>
							<Box p={{ sm: 2, xs: 2 }}>
								<Box sx={{ height: "90px" }}>
									<img src={voloplay}></img>
								</Box>
								<Box pt={5}>
									<Typography sx={{color: '#2BAED6', fontSize: '12px', height: '30px' }}>Artificial Intelegence & Software</Typography>
									<Typography sx={{fontWeight: 'bold', fontSize: '27px' }}>Volopay<br /> Company</Typography>
								</Box>
							</Box>
							<Box className={`border-b-8 border-[${theme.color[import.meta.env.VITE_SELECTED_THEME].secondary}]`}></Box>
						</Paper>
					</Grid>

					<Grid item xs={12} sm={4}>
						<Paper elevation={2} sx={{ height: '100%', width: '100%', pb: 2 }} >
							<Box p={{ sm: 2, xs: 2 }}>
								<Box sx={{ height: "90px" }}>
									<img src={turtle}></img>
								</Box>
								<Box pt={5}>
									<Typography sx={{ color: '#2BAED6', fontSize: '12px', height: '30px' }}>Alternative & Renewable Energy</Typography>
									<Typography sx={{ fontWeight: 'bold', fontSize: '27px' }}>TurtleTree<br /> Company</Typography>
								</Box>
							</Box>
							<Box className={`border-b-8 border-[${theme.color[import.meta.env.VITE_SELECTED_THEME].secondary}]`}></Box>
						</Paper>
					</Grid>

					<Grid item xs={12} sm={4}>
						<Paper elevation={2} sx={{ height: '100%', width: '100%', pb: 2 }} >
							<Box p={{ sm: 2, xs: 2 }}>
								<Box sx={{ height: "90px" }}>
									<img src={nuevocar}></img>
								</Box>
								<Box pt={5}>
									<Typography sx={{ color: '#2BAED6', fontSize: '12px', height: '30px' }}>Consumer Products</Typography>
									<Typography sx={{ fontWeight: 'bold', fontSize: '27px' }}>Nuevocor<br /> Company</Typography>
								</Box>
							</Box>
							<Box className={`border-b-8 border-[${theme.color[import.meta.env.VITE_SELECTED_THEME].secondary}]`}></Box>
						</Paper>
					</Grid>
				</Grid> */}

				<Box bgcolor={theme.color[import.meta.env.VITE_SELECTED_THEME].primary}
					p={{ lg: 10, md: 5, sm: 2 }}
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 4,
					}}
				>
					<Grid mt={3} container spacing={2} pl={{ lg: 5, md: 2, sm: 1 }}>
						<Grid item xs={12} pb={10}>
							<Typography textAlign="center" variant="body1" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white}>
								Testimonials
							</Typography>
							<Typography textAlign="center" variant="h5" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white} fontWeight="bold">
								What People Are Saying
							</Typography>
						</Grid>

						<Grid className='settings-Testimonial' container spacing={2} pl={{ lg: 5, md: 2, sm: 1 }}>
							<Box sx={{ width: '100%', pl: 2, py: 4 }}>
								<Slider {...settingsTestimonial}>
								{list && list.testimonials.list.testimonial.map((item, index) => (
										<Box key={index} sx={{ px: 2 }} py={{ sm: 2 }}>
											<Testimonial item={item}  />
										</Box>
									))}
								</Slider>
							</Box>
						</Grid>

					</Grid>
				</Box>
			</Landing>
		</>
	);
}

export default DrawerAppBar;
