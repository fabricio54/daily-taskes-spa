import Cookies from "js-cookie";

export function Dastboard() {

    return (
        <><h1>token</h1>
        <p>{Cookies.get('token')}</p>
        </>
    )
}