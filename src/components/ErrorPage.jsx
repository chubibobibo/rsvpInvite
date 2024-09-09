import { Link, useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      {error.status === 404 ? (
        <div>
          <img src='../404.png' alt='' />
        </div>
      ) : (
        <p>Something went wrong</p>
      )}
      <div className='flex justify-center text-2xl'>
        <Link to='/'>BACK TO HOME</Link>
      </div>
    </>
  );
}
export default ErrorPage;
