import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { getLoginStyles } from "./Login.styles";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import noix from "../../assets/noix.png"

export default function Login() {
    const [user, setUser] = useState<string>('');
    const auth = useAuth();
    const navigate = useNavigate();
    // 2 emps cannot have the same name
    const employees = [
        {
            name: 'Margueritta',
            pass: 'abc123'
        },
        {
            name: 'Anthony',
            pass: 'abc123'
        },
    ];

    const styles = getLoginStyles();

    const testPassword = (password: string) => {
        const currentEmployee = employees.filter(e => e.name === user)[0];
        if (password === currentEmployee.pass) {
            auth?.login(currentEmployee);
            navigate('/main');
        }
    }

    return <Stack sx={styles.container}>
        <img src={noix} height={100}/>
        <FormControl>
            <InputLabel id="user-login-select-label">User</InputLabel>
            <Select
                sx={styles.selectBox}
                labelId="user-login-select-label"
                id="user-login-select"
                value={user}
                label="User"
                onChange={(event) => setUser(event.target.value)}
            >
                {
                    employees.map(emp => (<MenuItem value={emp.name}>{emp.name}</MenuItem>))
                }
            </Select>
            <TextField
                required
                id="password-required"
                label="Password"
                type="password"
                defaultValue=""
                sx={styles.passwordBox}
                onChange={(event) => testPassword(event.target.value)}
            />
        </FormControl>
    </Stack>
}