import { employees } from "./employeesData"
import PersonCard from "./PersonCard"
const PersonList=()=>{
    return(
        <div>
            {employees.map(employee=>{
                <PersonCard />
            })}
        </div>
    )
}
export default PersonList