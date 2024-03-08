const devConfig = {
}

const prodConfig = {
}

let envConfig = prodConfig
if (import.meta.env.VITE_APP_ENV === 'development') envConfig = devConfig

const combinedConfig = {
    apiUrl: 'https://api.mocki.io',
    ...envConfig,
}

export default combinedConfig
