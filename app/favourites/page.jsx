import {Listview} from "../component/listview"
import { Navbar } from "../component/navbar"

export default function Favourties(){
    return(
        <>
        <Navbar/>
        <Listview total={false}/>
        </>
    )
}