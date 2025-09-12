// import React, { useEffect, useState } from 'react';
// import { db } from './firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   CircularProgress
// } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';

// function MissingList() {
//   const [missingList, setMissingList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMissingPersons = async () => {
//       try {
//         const colRef = collection(db, 'missingPersons');
//         const snapshot = await getDocs(colRef);

//         if (!snapshot.empty) {
//           const data = snapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//           }));

//           setMissingList(data);
//         }
//       } catch (err) {
//         console.error("Error fetching missing persons:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMissingPersons();
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4, p: 2 }}>
//       {/* Heading in stylish centered box */}
//       <Box
//         sx={{
//           backgroundColor: '#48A6A7', // bright blue
//           color: 'white',
//           p: 3,
//           mb: 5,
//           borderRadius: 3,
//           textAlign: 'center',
//           boxShadow: '0 4px 20px rgba(21, 101, 192, 0.5)',
//           fontWeight: '700',
//           fontSize: '2rem',
//           letterSpacing: '1.2px',
//           userSelect: 'none',
//           transition: 'background-color 0.3s ease',
//           '&:hover': {
//             backgroundColor: '#0d47a1',
//             cursor: 'default',
//           },
//         }}
//       >
//         Missing Persons
//       </Box>

//       <Grid container spacing={4}>
//         {missingList.length > 0 ? (
//           missingList.map(person => {
//             const gender = person.gender?.toLowerCase() || 'unknown';
//             return (
//               <Grid item xs={12} sm={6} md={4} key={person.id}>
//                 <Card
//                   sx={{
//                     borderRadius: 4,
//                     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//                     p: 2,
//                     textAlign: 'center',
//                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                     '&:hover': {
//                       transform: 'scale(1.05)',
//                       boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
//                       cursor: 'pointer'
//                     }
//                   }}
//                 >
//                   <PersonIcon
//                     sx={{
//                       fontSize: 90,
//                       color:
//                         gender === 'female'
//                           ? '#f48fb1'
//                           : gender === 'male'
//                           ? '#42a5f5'
//                           : 'gray',
//                       mb: 1
//                     }}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                       {person.name || 'Unknown'}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                       <strong>Gender:</strong> {gender}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                       <strong>Last Seen:</strong> {person.location || 'Not provided'}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                       {person.description || 'No description available.'}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             );
//           })
//         ) : (
//           <Typography sx={{ textAlign: 'center', mt: 3 }}>
//             No missing persons found.
//           </Typography>
//         )}
//       </Grid>
//     </Box>
//   );
// }

// export default MissingList;


// import React, { useEffect, useState } from 'react';
// import { db } from './firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   CircularProgress
// } from '@mui/material';

// import MaleIcon from '@mui/icons-material/Male';
// import FemaleIcon from '@mui/icons-material/Female';
// import ChildCareIcon from '@mui/icons-material/ChildCare';

// function MissingList() {
//   const [missingList, setMissingList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMissingPersons = async () => {
//       try {
//         const colRef = collection(db, 'missingPersons');
//         const snapshot = await getDocs(colRef);

//         if (!snapshot.empty) {
//           const data = snapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//           }));
//           setMissingList(data);
//         }
//       } catch (err) {
//         console.error("Error fetching missing persons:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMissingPersons();
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4, p: 2 }}>
//       <Box
//         sx={{
//           backgroundColor: '#48A6A7',
//           color: 'white',
//           p: 3,
//           mb: 5,
//           borderRadius: 3,
//           textAlign: 'center',
//           boxShadow: '0 4px 20px rgba(21, 101, 192, 0.5)',
//           fontWeight: '700',
//           fontSize: '2rem',
//           letterSpacing: '1.2px',
//           userSelect: 'none',
//           transition: 'background-color 0.3s ease',
//           '&:hover': {
//             backgroundColor: '#0d47a1',
//             cursor: 'default',
//           },
//         }}
//       >
//         Missing Persons
//       </Box>

//       <Grid container spacing={4}>
//         {missingList.length > 0 ? (
//           missingList.map(person => {
//             const gender = person.gender?.toLowerCase() || 'unknown';
//             const age = person.age || 0;

//             let IconComponent = ChildCareIcon;
//             let iconColor = '#fbc02d';  // Default kids icon color
//             let iconSize = 100;

//             if (age > 12) {
//               if (gender === 'female') {
//                 IconComponent = FemaleIcon;
//                 iconColor = '#e91e63';  // pink
//                 iconSize = 90;
//               } else if (gender === 'male') {
//                 IconComponent = MaleIcon;
//                 iconColor = '#2196f3';  // blue
//                 iconSize = 90;
//               } else {
//                 IconComponent = ChildCareIcon; // fallback to child icon for unknown gender
//                 iconColor = 'gray';
//                 iconSize = 90;
//               }
//             }

//             return (
//               <Grid item xs={12} sm={6} md={4} key={person.id}>
//                 <Card
//                   sx={{
//                     borderRadius: 4,
//                     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//                     p: 2,
//                     textAlign: 'center',
//                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                     '&:hover': {
//                       transform: 'scale(1.05)',
//                       boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
//                       cursor: 'pointer'
//                     }
//                   }}
//                 >
//                   <IconComponent
//                     sx={{
//                       fontSize: iconSize,
//                       color: iconColor,
//                       mb: 1,
//                     }}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                       {person.name || 'Unknown'}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                       <strong>Gender:</strong> {gender}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                       <strong>Last Seen:</strong> {person.location || 'Not provided'}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                       {person.description || 'No description available.'}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             );
//           })
//         ) : (
//           <Typography sx={{ textAlign: 'center', mt: 3 }}>
//             No missing persons found.
//           </Typography>
//         )}
//       </Grid>
//     </Box>
//   );
// }

// export default MissingList;



// import React, { useEffect, useState } from 'react';
// import { db } from './firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   CircularProgress,
// } from '@mui/material';

// import ManIcon from '@mui/icons-material/Man';
// import WomanIcon from '@mui/icons-material/Woman';
// import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

// function MissingList() {
//   const [missingList, setMissingList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMissingPersons = async () => {
//       try {
//         const colRef = collection(db, 'missingPersons');
//         const snapshot = await getDocs(colRef);

//         if (!snapshot.empty) {
//           const data = snapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data(),
//           }));

//           setMissingList(data);
//         } else {
//           setMissingList([]);
//         }
//       } catch (error) {
//         console.error('Error fetching missing persons:', error);
//         setMissingList([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMissingPersons();
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4, p: 2 }}>
//       {/* Heading in stylish centered box */}
//       <Box
//         sx={{
//           backgroundColor: '#1976d2',
//           color: 'white',
//           p: 3,
//           mb: 5,
//           borderRadius: 3,
//           textAlign: 'center',
//           boxShadow: '0 4px 20px rgba(25, 118, 210, 0.5)',
//           fontWeight: '700',
//           fontSize: '2rem',
//           letterSpacing: '1.2px',
//           userSelect: 'none',
//           transition: 'background-color 0.3s ease',
//           '&:hover': {
//             backgroundColor: '#115293',
//             cursor: 'default',
//           },
//         }}
//       >
//         Missing Persons
//       </Box>

//       <Grid container spacing={4}>
//         {missingList.length > 0 ? (
//           missingList.map(person => {
//             const gender = person.gender?.toLowerCase() || 'unknown';
//             const age = person.age || 0;

//             let IconComponent = ChildFriendlyIcon;
//             let iconColor = '#fbc02d'; // Yellow for children
//             let iconSize = 100;

//             if (age > 12) {
//               if (gender === 'female') {
//                 IconComponent = WomanIcon;
//                 iconColor = '#e91e63'; // Pink
//                 iconSize = 90;
//               } else if (gender === 'male') {
//                 IconComponent = ManIcon;
//                 iconColor = '#2196f3'; // Blue
//                 iconSize = 90;
//               } else {
//                 IconComponent = ChildFriendlyIcon;
//                 iconColor = 'gray';
//                 iconSize = 90;
//               }
//             }

//             return (
//               <Grid item xs={12} sm={6} md={4} key={person.id}>
//                 <Card
//                   sx={{
//                     borderRadius: 4,
//                     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//                     p: 2,
//                     textAlign: 'center',
//                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                     '&:hover': {
//                       transform: 'scale(1.05)',
//                       boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
//                       cursor: 'pointer',
//                     },
//                   }}
//                 >
//                   <IconComponent
//                     sx={{
//                       fontSize: iconSize,
//                       color: iconColor,
//                       mb: 1,
//                     }}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                       {person.name || 'Unknown'}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                       <strong>Gender:</strong> {gender}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                       <strong>Age:</strong> {age}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                       <strong>Last Seen:</strong> {person.location || 'Not provided'}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                       {person.description || 'No description available.'}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             );
//           })
//         ) : (
//           <Typography sx={{ textAlign: 'center', mt: 3 }}>
//             No missing persons found.
//           </Typography>
//         )}
//       </Grid>
//     </Box>
//   );
// }

// export default MissingList;

import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';

import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

function MissingList() {
  const [missingList, setMissingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMissingPersons = async () => {
      try {
        const colRef = collection(db, 'missingPersons');
        const snapshot = await getDocs(colRef);

        if (!snapshot.empty) {
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          setMissingList(data);
        } else {
          setMissingList([]);
        }
      } catch (error) {
        console.error('Error fetching missing persons:', error);
        setMissingList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMissingPersons();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4, p: 2 }}>
      <Box
        sx={{
          backgroundColor: '#48A6A7',
          color: 'white',
          p: 3,
          mb: 5,
          borderRadius: 3,
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(72, 166, 167, 0.6)',
          fontWeight: '700',
          fontSize: '2rem',
          letterSpacing: '1.2px',
          userSelect: 'none',
        }}
      >
        Missing Persons
      </Box>

      <Grid container spacing={4}>
        {missingList.length > 0 ? (
          missingList.map(person => {
            const gender = person.gender?.toLowerCase() || 'unknown';
            const age = Number(person.age) || 0; // Convert string to number if needed

            let IconComponent = ChildFriendlyIcon;
            let iconColor = '#fbc02d'; // Yellow for children
            let iconSize = 90;

            if (age > 12) {
              if (gender === 'female') {
                IconComponent = WomanIcon;
                iconColor = '#e91e63'; // Pink
              } else if (gender === 'male') {
                IconComponent = ManIcon;
                iconColor = '#2196f3'; // Blue
              } else {
                IconComponent = ChildFriendlyIcon;
                iconColor = 'gray';
              }
            }

            return (
              <Grid item xs={12} sm={6} md={4} key={person.id}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    p: 2,
                    textAlign: 'center',
                    border: '2px solid #48A6A7',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <IconComponent
                    sx={{
                      fontSize: iconSize,
                      color: iconColor,
                      mb: 1,
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#48A6A7' }}>
                      {person.name || 'Unknown'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      <strong>Age:</strong> {age}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      <strong>Gender:</strong> {gender}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      <strong>Last Seen Date:</strong> {person.lastSeenDate || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      <strong>Last Seen Time:</strong> {person.lastSeenTime || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      <strong>Last Seen Location:</strong> {person.lastSeenLocation || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      <strong>Appearance:</strong> {person.appearance || 'N/A'}
                    </Typography>
                    {person.additionalInfo && (
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        <strong>Additional Info:</strong> {person.additionalInfo}
                      </Typography>
                    )}
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      <strong>Phone:</strong> {person.phone || 'N/A'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Typography sx={{ textAlign: 'center', mt: 3 }}>
            No missing persons found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

export default MissingList;
