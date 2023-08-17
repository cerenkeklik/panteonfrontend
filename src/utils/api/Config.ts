import { baseurl } from "./baseurl"

export async function getconfigs() {
    let username = sessionStorage.getItem("username")
    try {
        const val = await fetch(`${baseurl}/api/Buildings/getbyusername?username=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        return val.json()
    } catch (error) {
        return error
    }
}


export async function getavailables() {
    let username = sessionStorage.getItem("username")
    try {
        const val = await fetch(`${baseurl}/api/Buildings/getavailabletypes?username=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        return val.json()
    } catch (error) {
        return error
    }
}

export async function addconfig(BuildingType: number, BuildingCost: number, ConstructionTime: number) {
    let username = sessionStorage.getItem("username")
    try {
        const val = await fetch(`${baseurl}/api/Buildings/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                Username: username,
                BuildingType: BuildingType,
                BuildingCost: BuildingCost,
                ConstructionTime: ConstructionTime
            })
        })
        return val.json()
    } catch (error) {
        return error
    }
}