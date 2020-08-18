import React, {Component} from 'react'
import { TodoList } from './TodoList'


export class TodoListItem extends Component
{
    state = {
        taskTitle:"",
        taskItems:
        [
            {
                id:'1',
                nome:'item 1',
                status:'pending',
            },
            {
                id:'3',
                nome:'item 2',
                status:'pending',
            },
            {
                id:'2',
                nome:'item 3',
                status:'pending',
            }
        ]
    } 

    //executa uma ação após renderizar os componentes no DOM
    componentDidMount(){
        this.setState({taskTitle:"my list tasks"})
    }

    

    render()
    {
        console.log("chamou render")
        const handleOnToggleCompleted = (taskId, event)=>{
            
            this.setState({
                taskItems : this.state.taskItems.map(task =>{
                    if(task.id === taskId){
                        return { ... task, status:event.target.checked ? 'completed' : 'pending'}
                    }
                    return task;
                })
            })
            console.log(this.state.taskItems)
        }

        return (
            <div>
                <h1>{this.state.taskTitle}</h1>
                <ul>

                    {this.state.taskItems.map(task =>(
                        <li>
                            <TodoList onToggleCompleted={handleOnToggleCompleted} {...task} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
