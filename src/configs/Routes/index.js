import { Route,Routes } from "react-router-dom";
import { Box } from "@mui/system";
import Dashboard from "../../component/Components/Pages/Dashboard/Dashboard"
import Buffet from "../../component/Components/Pages/Buffet/Buffet"
import DashboardLite from "../../component/Components/Pages/DashboardLite/DashboardLite"
import Parents from "../../component/Components/Pages/Parents/Parents"
import Error from "../../component/Components/Pages/Error/Error"
const MRoutes = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route path="/" element={<Dashboard />} />
                <Route path="/buffet/buffetman/:id" element={<Buffet />} />
                <Route path="/buffet/parents/:id" element={<Parents />} />
            </Route>
            <Route path="*" element={<Error />} />
            <Route path="404" element={<Error />} />
        </Routes>
    )

}
export default MRoutes