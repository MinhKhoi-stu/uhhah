// import Header from './Header';
// import { Box, Container } from '@mui/material';
// import type { JSX } from '@emotion/react/jsx-runtime';

// type Props = {
//   children: JSX.Element;
// };

// const Main = ({ children }: Props) => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: '1500px',
//           width: '100%',
//           minHeight: 'flex',
//           display: 'flex',
//           justifyContent: 'center'
//           // flexDirection: 'column',
//         }}
//       >
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{
//             backgroundColor: 'white',
//             display: 'flex',
//             flexDirection: 'column',
//             flexGrow: 1,
//             minHeight: '100vh',
//           }}
//         >
//           <Header />
//           <Box
//             component="main"
//             sx={{
//               flex: 1,
//               overflowY: 'auto',
//               padding: 2,
//             }}
//           >
//             {children}
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Main;

// src/layouts/MainLayout/Main.tsx
import { Box } from '@mui/material';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1400px',
        minHeight: '100vh',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        paddingX: '2px',
      }}
    >
      <Header />

      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          marginTop: '30px',
          padding: 2,
          backgroundColor: 'transparent',
          borderRadius: 2,
          // boxShadow: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Main;
