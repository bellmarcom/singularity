import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

export default function Dashboard() {

    return (

        <>

            <Header />

            <Sidebar />

            <StatCard title="Users" value="1284" />

        </>

    );

}
