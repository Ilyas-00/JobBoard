import { createTheme } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        mode: 'dark', // Activer le mode sombre
        primary: {
            main: blue[800], // Un bleu plus foncé
        },
        secondary: {
            main: grey[500], // Gris comme couleur secondaire
            light: grey[300], // Gris clair pour des éléments secondaires
        },
        // background: {
        //     default: '#121212', // Couleur de fond sombre
        //     paper: '#1E1E1E', // Couleur de papier sombre
        // },
    },
});