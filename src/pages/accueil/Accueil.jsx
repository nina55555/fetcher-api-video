import React from 'react';
import axios from "axios";
import { useQueryClient,useQuery, QueryClientProvider } from '@tanstack/react-query';

const fetchApi = async () =>{
    const res = await fetch ("https://nina55555.github.io/node-video-api/")
    return res.json()
}
    


const Accueil = () => {



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
    return (
        <div>
            <h1>accueil</h1>
            {fetchApi}

        </div>
    );
   
};

export default Accueil;