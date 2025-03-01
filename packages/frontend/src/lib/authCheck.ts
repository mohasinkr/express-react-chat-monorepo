import { redirect } from "@tanstack/react-router"

export const authCheck = () => {
    if (localStorage.getItem('token')) {
        return;
    }
    return redirect({
        to: '/login'
    })
}