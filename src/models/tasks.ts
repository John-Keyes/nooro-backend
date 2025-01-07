type Task = {
    id: number,
    title: string,
    color: string,
    completed: boolean
}

type NewTask = {
    title: string, 
    color: string, 
    completed: boolean
}

export type {NewTask, Task};
