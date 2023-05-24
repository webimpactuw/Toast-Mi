import { createClient } from '@sanity/client'
const client = createClient({
    "projectId": 'j48r7c81',
    "dataset": 'production'
})
export default client