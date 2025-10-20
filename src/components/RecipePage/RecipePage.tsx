import { Button, Grid, IconButton, InputAdornment, LinearProgress, Stack, TextField, Typography } from "@mui/material"
import useGetDrinks from "../../hooks/useGetDrinks"
import { getRecipePageStyles } from "./RecipePage.styles";
import { useEffect, useMemo, useRef, useState } from "react";
import { Close } from "@mui/icons-material";

type RecipePageProps = {
    type: string,
}
export default function RecipePage({ type }: RecipePageProps) {

    const { drinks, categories } = useGetDrinks(type);


    const styles = getRecipePageStyles(type);

    const [search, setSearch] = useState<string>('');
    const [selectedTab, setSelectedTab] = useState<string>(categories[0]);
    const [selectedDrink, setSelectedDrink] = useState<string>(drinks[selectedTab as keyof typeof drinks][0].name);

    const [crossedElements, setCrossedElements] = useState<string[]>([]);

    const [progress, setProgress] = useState<number>(100);
    const [timerRunning, setTimerRunning] = useState<boolean>(false);
    const [currentTimeS, setCurrentTimeS] = useState<number>(0)

    const pour = useRef(null);

    const v60Time = [0, 30, 20, 20, 20, 130];

    const runV60Timer = async () => {
        setTimerRunning(true);
        if (pour.current) {
            (pour.current as HTMLElement).innerText = 'POUR 50 mL';
            (pour.current as HTMLElement).style.display = 'block';
            await new Promise(r => setTimeout(r, 2000));
        }
        for (let i = 0; i < v60Time.length; i++) {
            if (pour.current) {
                (pour.current as HTMLElement).style.display = 'none';
            }
            const time = v60Time[i]
            let currentTime = 0;
            while (currentTime < time) {
                await new Promise(r => setTimeout(r, 1000));
                currentTime++;
                setCurrentTimeS(time - currentTime);
                setProgress(100 - (currentTime / time) * 100);
            }
            if (pour.current) {
                (pour.current as HTMLElement).style.display = 'block';
                if (i === 5) {
                    (pour.current as HTMLElement).innerText = 'SERVE';
                    setTimerRunning(false);
                    await new Promise(r => setTimeout(r, 2000));
                }
                await new Promise(r => setTimeout(r, 2000));
                if (pour.current) {
                    (pour.current as HTMLElement).style.display = 'none';
                }
            }

        }
    }

    const handleStepClick = (element: string) => {
        if (crossedElements.includes(element)) {
            const m = crossedElements.filter(e => e !== element);
            setCrossedElements(m);
        } else {
            const m = [...crossedElements, element];
            setCrossedElements(m);
        }
    };

    const filteredDrinks = useMemo(() => {
        return drinks[selectedTab as keyof typeof drinks].filter(drink => drink.name.toLowerCase().includes(search.toLowerCase()));
    }, [drinks, search, selectedTab])

    const currentDrink = useMemo(() => {
        return drinks[selectedTab as keyof typeof drinks].filter(drink => drink.name === selectedDrink)[0];
    }, [drinks, selectedTab, selectedDrink])

    useEffect(() => {
        if (filteredDrinks.length === 1) {
            setSelectedDrink(filteredDrinks[0].name)
        }
    }, [filteredDrinks])

    useEffect(() => {
        setCrossedElements([]);
    }, [selectedDrink, selectedTab])

    return <Grid container size={12}>
        <Stack sx={styles.topBar}>
            {categories.map(c => (
                <Button
                    sx={{
                        ...styles.catButton,
                        color: "#FFF",
                        backgroundColor: selectedTab === c ? type === 'cold' ? '#4b664fff' : '#926976ff' : type === 'cold' ? '#719877' : '#DEBCC7'
                    }}
                    onClick={() => { setSelectedTab(c); setSelectedDrink(drinks[c as keyof typeof drinks][0].name) }}
                >
                    {c}
                </Button>))}
        </Stack>
        <Grid size={{xs: 12, md: 3}} sx={styles.leftPane}>
            <TextField
                placeholder="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                fullWidth
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setSearch('')}>
                                    <Close />
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <Stack sx={styles.drinkList}>
                {
                    filteredDrinks.map(drink => {
                        return <Button
                            fullWidth
                            sx={{ ...styles.drinkButton, backgroundColor: drink.color, border: selectedDrink === drink.name ? '3px solid black' : 'none' }}
                            onClick={() => { setSelectedDrink(drink.name); }}
                        >
                            {drink.name}
                        </Button>
                    })
                }
            </Stack>

        </Grid>
        <Grid size={{xs: 12, md: 8}} sx={styles.stepsContainer} container>
            <Typography sx={styles.title}>{selectedDrink}</Typography>
            <Typography sx={{ ...styles.sizeTitle, mt: 0 }}>{currentDrink.mainSize}</Typography>
            {
                currentDrink.steps.split('/').map((step, index) => (
                    <Typography
                        key={`${currentDrink.mainSize}-${step}-${index}`}
                        onClick={() => handleStepClick(`${currentDrink.mainSize}-${step}-${index}`)}
                        sx={{ textDecoration: crossedElements.includes(`${currentDrink.mainSize}-${step}-${index}`) ? 'line-through' : 'none' }}
                    >
                        {step}
                    </Typography>
                ))
            }
            {
                currentDrink.availableSizes.map(size => {
                    const [title, steps] = size.split(':');
                    return <>
                        <Typography sx={styles.sizeTitle}>{title}</Typography>
                        {
                            steps.split('/').map((step, index) => (
                                <Typography
                                    key={`${size}-${step}-${index}`}
                                    onClick={() => handleStepClick(`${currentDrink.mainSize}-${step}-${index}`)}
                                    sx={{ textDecoration: crossedElements.includes(`${currentDrink.mainSize}-${step}-${index}`) ? 'line-through' : 'none' }}
                                >
                                    {step}
                                </Typography>
                            ))
                        }
                    </>
                })
            }


            {selectedDrink === 'Drip-Coffee (V60)' &&
                <>
                    <Button
                        disabled={timerRunning}
                        sx={{ ...styles.drinkButton, backgroundColor: 'red' }}
                        onClick={runV60Timer}>
                        Start Timer
                    </Button>

                    <Grid size={10} display={'flex'} flexDirection={'column'} gap={1}>
                        <Stack direction={'row'} alignItems={'center'} gap={2}>
                            <LinearProgress variant="determinate" value={progress} sx={{ flexGrow: 0.98 }} />
                            <Typography sx={styles.timerText}>{currentTimeS}</Typography>
                        </Stack>
                    </Grid>
                    <Typography ref={pour} sx={styles.pour}>POUR 50mL</Typography>
                </>
            }
        </Grid>
    </Grid>
}