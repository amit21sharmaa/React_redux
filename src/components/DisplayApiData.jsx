import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getApiData, getfilteredItems, selectApiSlice } from "../reduxSlice/apiSlice"
import { Box, Button, TextField } from "@mui/material"
import APIDataTable from "./APIDataTable"


const DisplayApiData = () => {
    const [apiLink, setApiLink] = useState('')
    const [apiData, setApiData] = useState([])
    const [searchText, setSearchText] = useState("")
    const [dataHeader, setDataHeader] = useState([])
    const [filteredData, setFiteredData] = useState([])
    const fetchApiData = useSelector(selectApiSlice);
    const dispatch = useDispatch();

    const handleApiData = () => {
        fetch(apiLink).then(response => response.json()).then(data => {
            dispatch(getApiData(data))
        })
        setApiLink("")
    }
    useEffect(() => {
        console.log("fetchApiData in UI",fetchApiData)
        setApiData(fetchApiData.apiData)
        setDataHeader(fetchApiData.headers)
        setFiteredData(fetchApiData.filteredItems)
        console.log("apiData in UI", apiData, dataHeader)
    },[fetchApiData])

    useEffect(() => {
        if(searchText.length>2){
            dispatch(getfilteredItems(searchText));
        }
    },[searchText])


    return(
        <div>
            <Box sx={{margin: "1% 5% 1% 5%", display:"flex", justifyContent:"space-between", maxHeight:"px"}}>
                <TextField id="filled-basic" sx={{width:"80%"}} label="Add API link" variant="filled" value = {apiLink} onChange={(e) => setApiLink(e.target.value)} />
                <Button variant="contained" sx={{width:"15%"}} type="submit" onClick={handleApiData}>Add</Button>
            </Box>
            { apiData.length >0 && dataHeader.length >0 ? 
                <div>
                    <h1>API Data</h1> 
                    <TextField id="filled-basic" sx={{width:"80%"}} label="Search Items" variant="filled" value = {searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <APIDataTable rows={searchText.length>2 ? filteredData : apiData} headers={dataHeader} />
                </div>
            : null}
        </div>
    )
}

export default DisplayApiData;