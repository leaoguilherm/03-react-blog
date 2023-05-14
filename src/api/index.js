
export async function postApi(newPost) {
    const url = 'https://6348cc5ea59874146b110e79.mockapi.io/posts'

    const options = {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(newPost)

    }

    const response = await fetch(url, options)
}

export async function getApi() {
    const url = 'https://6348cc5ea59874146b110e79.mockapi.io/posts'

    const response = await fetch(url)
    const responseData = await response.json()

    return responseData
    
}
