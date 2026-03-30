import { useEffect, useState } from "react";
import AppCard from "../Components/AppCard";

const AllApps = ({limit, showTitle}) => {
    
    const [apps, setApps] = useState([]);

    // useEffect(() => {
    //     fetch('/apps.json')
    //         .then(res => res.json())
    //         .then(data => setApps(data))
    // }, []);
    useEffect(() => {
        fetch("/apps.json")
        .then((res) => res.json())
        .then((data) => {
            const limitedData = limit ? data.slice(0, limit) : data;
            setApps(limitedData);
        });
    }, [limit]);

    return (
        <div className="my-10">
            {showTitle !== false && (<div className="text-center mt-10">
            <h1 className="text-4xl font-bold">Our All Applications</h1>
            <p className="text-[#627382] my-3">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>)}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                {apps.map (app => <AppCard key={app.id} app={app} />)}
            </div>
        </div>
    );
};

export default AllApps;