export default {
    [process.env.GRAPHQL_PATH]: process.env.BACKEND_URL,
    '/actions': process.env.BACKEND_URL,
    '/robots.txt': process.env.BACKEND_URL,
    '/humans.txt': process.env.BACKEND_URL,
    '/sitemaps_*.xml': process.env.BACKEND_URL,
}
