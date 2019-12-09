import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

function useProctectPage() {
    const [ userState, dispatch ] = useContext(UserContext)
    const history = useHistory();

    useEffect(() => {
        if(!userState.validated){
            history.push('/');
        }
    }, [userState.validated])


    return userState.validated
}

export default useProctectPage;
