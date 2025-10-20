export const getRecipePageStyles = (type: string) => ({
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: type === 'cold' ? '#719877' : '#debcc7',
    },
    catButton: {
        fontWeight: 600,
        height: 50,
    },
    leftPane: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '95vh',
        maxHeight: '95vh',
        px: 4,
        py: 2,
        justifyContent: 'flex-start',
        overflow: 'scroll',
        gap: 2,
    },
    drinkList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '80vh',
        maxHeight: '80vh',
        justifyContent: 'flex-start',
        overflow: 'scroll',
        gap: 1,
    },
    drinkButton: {
        minHeight: '50px',
        color: '#FFF',
        fontWeight: 600,
    },
    timerText: {
        fontSize: 25,
    },
    pour: {
        display: 'none',
        color: 'red',
        fontSize: '20px',
        fontWeight: 600,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: '32px',
        mb: 5,
        mt: 3,
        fontWeight: 600,
    },
    sizeTitle: {
        fontWeight: 600,
        mt: 4,
        textDecoration: 'underline'
    },
    stepsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
    }
})