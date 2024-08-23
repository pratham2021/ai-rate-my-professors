"use client";
import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useRouter } from "next/navigation";
// import { useChat } from "ai/react";

const Chatbot = () => {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  return (
    <Box width="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Stack direction="column" width="500px" height="700px" border="1px solid black" p={2} spacing={3}>
          <Stack direction="column" spacing={2} flexGrow={1} overflow='auto' maxHeight='100%'>
            {messages.map((message, index) => (
                <Box key={index} display="flex" justifyContent={message.role === 'assistant' ? 'flex-start' : 'flex-end'}> 
                  <Box bgcolor={message.role === 'assistant' ? 'primary.main' : 'secondary.main'} color="white" borderRadius={16} p={3}>
                    {message.content}
                  </Box>
                </Box>
            ))}
          </Stack>

          <Stack direction="row" spacing={2}>
            <TextField label="Message" value={message} onChange={(e) => { setMessage(e.target.value) }} fullWidth/>
            <Button variant='contained'>
              Send
            </Button>
          </Stack>
        </Stack>
    </Box>
  );
};

export default Chatbot;
