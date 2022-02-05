import { useState } from 'react'
import { useParams } from 'react-router-dom'


const AlbulmView = () => {
    const { id } = useParams()
    const [ albulmData, setalbulmData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbulmView