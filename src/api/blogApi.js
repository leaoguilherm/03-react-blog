import { api } from "."

export async function postApi(newPost) {
    await api.post('/posts', newPost)
}

export async function getApi() {
    const response = await api.get('/posts')
    return response
}