import Link from "next/link";

function Budget(){


    const user = {'budget':false,'name':'Abhinav'}

    return(
    
    <div>
        <h1 className="text-center text-6xl">Budget Page</h1>
        <h2 className="text-3xl">Welcome, {user.name}</h2>
        {!user.budget ? 
        
        <Link href='/' className="flex flex-col items-center">
            <p>Add Budget</p>
            <img src="/add-button-sm.png"></img>
        </Link>
        :
        
        <></>}
    </div>
    );
}

export default Budget;