import { Box, Container } from '@mui/material';
import { SectionIdEnum } from 'types';

export type SectionContainerProps = {
  children: React.ReactNode;
  sectionId: SectionIdEnum;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, sectionId }) => {
  return (
    <div id={sectionId} key={sectionId}>
      <Container>
        <Box minHeight="100vh">{children}</Box>
      </Container>
    </div>
  );
};
