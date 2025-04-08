import { employees } from "./employeesData"
import PersonCard from "./PersonCard"
const PersonList=()=>{
    return(
        <div>
            {employees.map(e=>{
                <PersonCard key={e.id} {...e} />
            })}
        </div>
    )
}
export default PersonList