import React,{useEffect, useState} from 'react'
import * as firebase from 'firebase'
import { useHistory } from 'react-router-dom'

import UnderConstruction from '../../Layouts/UnderConstruction'
import UnderConstructionSVG from '../../../assests/under_construction.svg'
import Loader from '../../Layouts/Loader'
import Header from '../../Header/Header'

function FeedPage() {
    
    const history = useHistory()
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        firebase.auth().onAuthStateChanged((currentUser)=>{
            if(!currentUser){
                setLoading(false)
                history.push('/login')
            }else{
                setLoading(false)
            }
        })
    },[history])

    return (
        <div>
            {loading && 
            <div className="w-screen h-screen"><Loader loading={loading}/></div>}
            {!loading &&
                <Header/> 
            }
        </div>
    )
}

export default FeedPage
