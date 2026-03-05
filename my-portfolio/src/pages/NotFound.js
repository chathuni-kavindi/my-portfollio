import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center p-20">
    <h1 className="text-6xl font-bold">404</h1>
    <p className="text-xl my-4">Oops! The page you're looking for doesn't exist.</p>
    <Link to="/" className="text-blue-500 underline">Back to Home</Link>
  </div>
);

export default NotFound;