import { useState } from 'react'
import { UltrusButton } from '@ultrus/ui'

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div>
            <UltrusButton
                variant="contained"
                color="primary"
                onClick={() => setIsDarkMode((prev) => !prev)}
                sx={{ color: isDarkMode ? 'white' : 'black' }}
            >
                Hello
            </UltrusButton>
        </div>
    )
}

export default App
