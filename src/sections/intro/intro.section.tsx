import { Box, Typography } from '@mui/material';

export const IntroSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h6">hello, my name is</Typography>
      <Typography variant="h2" mb={1} fontWeight={500}>
        CodeFocus
      </Typography>
      <Typography variant="h5" mb={3}>
        I make youtube tutorials
      </Typography>
      <Typography maxWidth={500}>
        Thank you for watching - please leave a like on the video and subscribe for more coding content!
      </Typography>
    </Box>
  );
};
