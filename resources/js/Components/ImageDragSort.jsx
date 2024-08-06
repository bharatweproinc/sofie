import { IndeterminateCheckBox } from '@mui/icons-material';
import { Alert, AlertTitle, Box, Grid, IconButton } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

// const DATA = [
//     "https://images.pexels.com/photos/27008964/pexels-photo-27008964/free-photo-of-a-tree-is-sitting-on-the-shore-of-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     "https://images.pexels.com/photos/18986078/pexels-photo-18986078/free-photo-of-woman-leaning-on-vessel-railing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     "https://images.pexels.com/photos/17815963/pexels-photo-17815963/free-photo-of-blue-facade-of-residential-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
// ]

export default function ImageDragSort({data, setData}) {
    const [draggingItem, setDraggingItem] = useState(null)

    const handleDragStart = (e, item) => {
        setDraggingItem(item);
        e.dataTransfer.setData('text/plain', '');
    };

    const handleDragEnd = () => {
        setDraggingItem(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, targetItem) => {
        if (!draggingItem) return;

        const currentIndex = data.indexOf(draggingItem);
        const targetIndex = data.indexOf(targetItem);

        if (currentIndex !== -1 && targetIndex !== -1) {
            data.splice(currentIndex, 1);
            data.splice(targetIndex, 0, draggingItem);
            setData(items);
        }
    };

    const removeImg = (index) => {
        setData(prevData => {
            const newImages = prevData["banner_images"].filter((_, i) => i !== index);
            return { ...prevData, banner_images: newImages };
        });
    };

    return (
        <Grid container className="sortable-list border mt-2">
            <Grid xs={12} padding={3} >
                <Alert variant="outlined" severity="info">
                    You can drag image to reposition the order on slide.
                </Alert>
            </Grid>
            {data.map((item, index) => (
                <Grid
                    key={index}
                    xs={3}
                    padding={3}
                >
                    <Box
                        className=
                            {`item ${item === draggingItem ?
                                'dragging' : ''
                            }`}
                        draggable="true"
                        onDragStart={(e) =>
                            handleDragStart(e, item)}
                        onDragEnd={handleDragEnd}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, item)}
                        item
                        position={"relative"}
                        borderRadius={2}
                        border={1}
                    >
                        <img className='mx-auto' src={item} alt={`Uploaded preview ${index}`} width="250px" style={{ height : '250px', objectFit : 'contain' }}/>
                        <IconButton
                            color={"error"}
                            onClick={() => {removeImg(index), console.log('index', index)} }
                            style={{
                                position: 'absolute',
                                top: '5px',
                                right: '5px',
                            }}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
}
