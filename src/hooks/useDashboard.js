import { useEffect, useState } from "react";

import { loadDashboard } from "../services/dashboardService";

export default function useDashboard() {

    const [data, setData] = useState(null);

    useEffect(() => {

        loadDashboard().then(setData);

    }, []);

    return data;

}
