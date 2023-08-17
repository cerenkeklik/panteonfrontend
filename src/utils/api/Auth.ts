import { baseurl } from "./baseurl"

export async function login(username: string, password: string) {
    try {
        const val = await fetch(`${baseurl}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(
                {
                    Username: username,
                    Password: password
                }
            )
        })
        return val.json()
    } catch (error) {
        return error
    }
}

export async function register(username: string, password: string, email: string) {
    try {
        const val = await fetch(`${baseurl}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(
                {
                    Username: username,
                    Password: password,
                    Email: email
                }
            )
        })
        return val.json()
    } catch (error) {
        return error
    }
}