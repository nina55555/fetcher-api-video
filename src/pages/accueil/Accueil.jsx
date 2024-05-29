import React, { useEffect, useState } from 'react';
import axios from 'axios'


const base_url = "http://localhost:3001/users/";



/*
const fetchApi = async () =>{
    const res = await fetch ("http://localhost:3001/users/")
    return res.json()
}
  */ 

const Accueil = () => {

    const [data, setData] = useState([])
    useEffect(()=> {
        //axios.get('http://localhost:5980/runways/')
        axios.get('http://localhost:3001/users/')
        .then(res => setData(res.data))
        .catch(err=> console.log(err))
    },[] )


    return (
        <div>
            <h1>accueil</h1>
            {
                data.map((d,i)=> {
                    return <p key={i}>{d.author} </p>
                })
            }

        </div>
    );
   
};

export default Accueil;

    /*
    //acces au client
    const queryClient = useQueryClient();
    //queries
    const query = useQuery({
        queryKey: ["users"],
        queryFn: () => axios.get("https://nina55555.github.io/node-video-api/")
        .then((res)=>res.data),
        onerror: (error) => console.log(error)
    } );
    console.log(query)

*/

    /*
    const showCollection =() =>{
        
        axios.get("https://nina55555.github.io/node-video-api/")
        .then(res  => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
     */