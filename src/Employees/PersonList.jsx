import { employees } from "./employeesData"
import PersonCard from "./PersonCard"
const PersonList=()=>{
    return(
        <>
            {employees.map(e=>(
                <PersonCard key={e.id} {...e} />
            ))}
        </>
    )
}
export default PersonList