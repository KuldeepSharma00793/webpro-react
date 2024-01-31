import React from 'react';
import LoginForm from './LoginForm';
// import AdminPanel from './AdminPanel';

function Practice(){
    var isLoggedIn = true;
    return (
        <div className="container">
            <h2>Hi I am new component for practice</h2>
            <div>{isLoggedIn && <LoginForm/>}  </div>

        </div>
    )
}

export default Practice;