import React from 'react';

function Home(){
    const logout = () =>{
        localStorage.clear();
        window.location.href = '/';
    }
    return(
        <div className="text-center">
            <h1 className="display-4">Home - Logado</h1>
            <button className="btn btn-primary" type="submit" onClick={logout}>Logout</button>
        </div>
    );
    
}
export default Home;