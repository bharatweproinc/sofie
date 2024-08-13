import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { Link } from "@inertiajs/react";
import "./style.scss"

const linkStyle = {
    color: "#4E596D",
    fontSize: "14px",
    lineHeight: "2",
};


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SubmitPopup({type ,open, setOpen,handleSubmit}) {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle textAlign={'center'} fontWeight={600}>{`Guidlines for ${type ==="mentor" ? "Mentor" : "Mentee"} Detail Submission`}</DialogTitle>
        <form method={"post"} onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Grid item xs={12} mb={3} className='custom_privacy'>
            <FormControlLabel required control={<Checkbox />}
              label={
              <>
                I acknowledge that I have read and accept upcie's{" "}
                <Link style={linkStyle} href={route("landing.termsconditions")}>
                    <em>Privacy and Policy</em>
                </Link>{" "}
                and{" "}
                <Link style={linkStyle} href={route("landing.termsconditions")}>
                    <em>Terms and Conditions</em>
                </Link>
                .
            </>
        } />
            </Grid>
            <Grid item xs={12} mb={3} className='custom_privacy'>
            <FormControlLabel required control={<Checkbox />}
                //label={`${type==="mentor"}`}
                label = {type==="mentor" ? "I agree to provide up to 10 hours of free consultation hours to each of my selected SME/Mentee for one year, starting from the first mutually agreed-upon meeting."
                :"I acknowledge that should I get paired up with a Mentor, I will be provided with up to 10 hours of free consultation hours from my designated Mentor for one year, starting from the first mutually agreed-upon meeting."}
                />
            </Grid>
            <Grid
             item xs={12} mb={3} className='custom_privacy'>
            <FormControlLabel required control={<Checkbox />}
                //label="Should I choose to continue my mentorship with my SME/Mentee after 10 hours of consultation, I can discuss the arrangement directly with my SME/Mentee.  I acknowledge that upcie will not be involved in any deals between my SME/Mentee and I thereafter"
                label = {type==="mentor" ? "Should I choose to continue my mentorship with my SME/Mentee after 10 hours of consultation, I can discuss the arrangement directly with my SME/Mentee.  I acknowledge that upcie will not be involved in any deals between my SME/Mentee and I thereafter"
                :"I promise to respect my Mentor's volunteered time and as such, I will put forth my best effort to work with my Mentor."}
                />
            </Grid>
            {type === "mentor" ? <Grid></Grid> :
            <Grid
             item xs={12} mb={3} className='custom_privacy'>
            <FormControlLabel required control={<Checkbox />}
                label = "Should I choose to continue my mentorship with my Mentor after 10 hours of consultation, I can discuss the arrangement directly with my Mentor.  I acknowledge that upcie will not be involved in any deals between my Mentor and I thereafter." />
            </Grid>
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent:'center', display:'flex' }}>
          <Button className='cancel_btn_' sx={{ padding: '8px 20px', backgroundColor: '#d32f2f', textTransform: 'capitalize', color: '#fff'}} onClick={handleClose}>Cancel</Button>
          <Button className='submit_btn_' sx={{ padding: '8px 20px', backgroundColor: '#117B9E', textTransform: 'capitalize', color: '#fff'}}  type='submit'>Submit</Button>
        </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
