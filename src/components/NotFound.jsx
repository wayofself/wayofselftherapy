import {Link} from "react-router-dom";


const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="">
                <h1 className="justify-center items-center flex font-bold text-5xl mt-40">Page Not Found</h1>
                <Link to={"/"} className="justify-center items-center flex pt-30">
                    <button className="bg-indigo-500 text-white rounded-lg flex p-3">Back to  home page</button>
                </Link>
            </div>

        </div>
    );
};
export default NotFound;