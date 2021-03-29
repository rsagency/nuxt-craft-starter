export default {
    baseURL:
        process.env.NODE_ENV === 'production'
            ? 'https://myfrontenddomain.org'
            : 'http://localhost:3000',
}
