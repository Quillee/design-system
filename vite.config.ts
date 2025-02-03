import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'ultrus-ui',
            // the proper extensions will be added
            fileName: 'ultrus-ui',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                preserveModules: false,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'react/jsx-runtime',
                },
            },
        },
    },
})
