function Circle({radius, stroke}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r={radius}/>
        </svg>
    );
}

export default Circle;