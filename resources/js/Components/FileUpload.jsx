import { Avatar, Box } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const ProfilePhotoUpload = ({setData,data,name, defaultImg}) => {

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const updatedData = {
                    ...data,
                    [name]: reader.result,
                  };
                  setData(updatedData);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div style={{ position: "relative" }}>
                <label htmlFor="avatar-upload">
                    <Avatar
                        alt="Avatar"
                        src={data?.profile_photo || defaultImg}
                        sx={{ width: 162, height: 162 }}
                    />
                </label>
                <input
                    accept="image/*"
                    id="avatar-upload"
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
