import { IUser } from '../models/User'

const users: IUser[] = [
    {
        name: "Administrator",
        email: "admin@example.com",
        password: "test1234",
        role: "admin",
        isAdmin: true
    },
    {
        name: "Danijel Nikolic",
        email: "dan@example.com",
        password: "test1234",
        role: "editor",
        isAdmin: false
    },
    {
        name: "John Doe",
        email: "john@example.com",
        password: "test1234",
        role: "subscriber",
        isAdmin: false
    },
    {
        name: "Jane Doe",
        email: "jane@example.com",
        password: "test1234",
        role: "subscriber",
        isAdmin: false
    }
]

export default users