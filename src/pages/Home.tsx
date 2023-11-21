import { useState } from "react";

import HeaderStack from "./../layout/HeaderStack"
import BoatSearch from "../features/boats/BoatSearch"
import BoatList from "../features/boats/BoatList"

import { useBoatsData } from "../data/hooks/useBoatsData";
 

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [nameFilter, setNameFilter] = useState("");
    const {loading, error, data}  = useBoatsData({currentPage, nameFilter});

    return <>
        <HeaderStack title="Home" content={<BoatSearch/>}/>
        <BoatList boats={data ? data.boats.data : [] }/>
    </>
}