import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div>
            <div>There was an error</div>
            <Link to="/" >
                <button className="btn back-home">Back Home</button>
            </Link>
        </div>
    )
}

