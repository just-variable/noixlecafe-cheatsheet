export const getColdOrHotStyles = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#FFF',
        gap: 6,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
    },
    coldButton: {
        backgroundColor: '#00bfff',
        border: '1px solid #0447b5',
        color: 'white',
        height: 70,
        fontSize: 18,
        width: 170,
    },
    hotButton: {
        color: 'white',
        fontSize: 18,
        backgroundColor: '#fe8da1',
        border: '1px solid #Fe0019',
        height: 70,
        width: 170,
    },
})