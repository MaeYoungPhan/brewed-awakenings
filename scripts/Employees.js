import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

const filteredOrders = (employee) => {
    let fulfilledOrders = []

    fulfilledOrders = orders.filter(order => employee.id === order.employeeId)
        
    const totalSales = fulfilledOrders.length

    // for (const order of orders) {
    //     if (order.employeeId === employee.id) {
    //         fulfilledOrders++
    //     }

        return totalSales
    }
// }

document.addEventListener("click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target
        /* only run if specified item was clicked */
        if (itemClicked.id.startsWith("employee")) {

            const [,employeePrimaryKey] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeePrimaryKey)) {
                    const sales = filteredOrders(employee)

                    window.alert(`${employee.name} sold ${sales} products.`)

                }
            }
        }
        
    })

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

