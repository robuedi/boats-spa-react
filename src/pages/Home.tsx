import HeaderStack from "./../layout/HeaderStack"
import BoatSearch from "./../features/boat-listing/BoatSearch"
import BoatList from "../features/boat-listing/BoatList"

export default function Home() {
    return <>
        <HeaderStack title="Home" content={<BoatSearch/>}/>
        <BoatList/>
    </>
}