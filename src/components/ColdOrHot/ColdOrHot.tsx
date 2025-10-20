import { Button, Stack } from "@mui/material";
import { getColdOrHotStyles } from "./ColdOrHot.styles";
import { useNavigate } from "react-router-dom";

export default function ColdOrHot() {
    const styles = getColdOrHotStyles();
    const navigate = useNavigate();
    return <Stack sx={styles.container}>
        <Stack sx={styles.buttonContainer}>
            <Button
                sx={styles.coldButton}
                onClick={() => navigate('/cold')}
            >
                Cold Drinks
            </Button>

            <Button
                sx={styles.hotButton}
                onClick={() => navigate('/hot')}
            >
                Hot Drinks
            </Button>
        </Stack>
    </Stack>
}