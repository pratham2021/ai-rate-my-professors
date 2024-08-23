"use client";
import React, { useState } from "react";
import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import Send from '@mui/icons-material/Send';

const Chatbot = () => {

  // const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  return (
    <Box width="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography>Welcome to RPM GPT!</Typography>
        <Stack direction="column" width="500px" height="700px" border="1px solid black" p={2} spacing={3}>
          <Stack direction="column" spacing={2} flexGrow={1} overflow='auto' maxHeight='100%'>
            {/* {messages.map((message, index) => (
                <Box key={index} display="flex" justifyContent={message.role === 'assistant' ? 'flex-start' : 'flex-end'}> 
                  <Box bgcolor={message.role === 'assistant' ? 'primary.main' : 'secondary.main'} color="white" borderRadius={16} p={3}>
                    {message.content}
                  </Box>
                </Box>
            ))} */}
          </Stack>

          <Stack direction="row" spacing={2}>
            <TextField label="Message" value={message} onChange={(e) => { setMessage(e.target.value) }} fullWidth/>
            
            <Button variant="contained">
              <IconButton aria-label="send" sx={{ color: 'white' }} variant="contained" onClick={() => console.log("Hello!")}>
                  <Send aria-label="home" sx={{ transform: 'rotate(-90deg)' }}></Send>
              </IconButton>
            </Button>
          </Stack>
        </Stack>
      </Box>
  );
};

export default Chatbot;
