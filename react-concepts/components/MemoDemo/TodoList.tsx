"use client"

import { useMemo } from "react";

type Todo = {
    id: number,
    text: string,
    completed: boolean
}

export function createTodos(): Todo[] {
    const todos = [];
    for (let i = 0; i < 50; i++) {
        todos.push({
            id: i,
            text: "Todo " + (i + 1),
            completed: Math.random() > 0.5
        });

    }
    return todos;
}

export function filterTodos(todos: Todo[], tab: string) {
    console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    return todos.filter(todo => {
        if (tab === 'all') {
            return true;
        } else if (tab === 'active') {
            return !todo.completed;
        } else if (tab === 'completed') {
            return todo.completed;
        }
    });
}

interface IProps {
    todos: Todo[];
    theme: string;
    tab: string;
}
// Component definition
export function TodoList({ todos, theme, tab }: IProps) {
    const visibleTodos = useMemo(() => {
        return filterTodos(todos, tab)
    }, [todos, tab]); // will only recompute when either todos or tab change
    
    return (
        <div>
            <strong>Theme - {theme}</strong>&nbsp;
            <em>(Notice how this component takes longer to re-render)</em>
            <ul>
                <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
                {visibleTodos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'line-through	' : ''}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
