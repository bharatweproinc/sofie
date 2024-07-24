import { Avatar, Box } from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const ProfilePhotoUpload = ({setData, data, photoKey}) => {

    const [img, setImg] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setData({...data, [photoKey] :file});
            setImg(file)
        }
    };

    return (
        <>
            <div style={{ position: "relative" }}>
                <label htmlFor={`${photoKey}-upload`}>
                    <Avatar
                        alt="Avatar"
                        src={img ? URL.createObjectURL(img) : data[photoKey]}
                        sx={{ width: 162, height: 162 , cursor:'pointer'}}
                    />
                </label>
                <input
                    accept="image/*"
                    id={`${photoKey}-upload`}
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                />
                <label
                    htmlFor="avatar-upload"
                    style={{ position: "absolute", top: "73%", left: " 72%" }}
                >
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                    >
                        <PhotoCamera
                            sx={{
                                background: "white",
                                borderRadius: "50%",
                                padding: "2px",
                            }}
                        />
                    </IconButton>
                </label>
            </div>
        </>
    );
};

export default ProfilePhotoUpload;
