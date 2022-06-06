import React, { createContext, useReducer } from "react";
import commands from '../data/commands';

const initialState = { commands }
const CommandsContext = createContext({})

const actions = {
    createCommand(state, action) {
        const command = action.payload
        command.id = Math.random()
        return { 
            ...state,
            commands: [...state.commands, command],
        }
    },
    updateCommand(state, action) {
        const updated = action.payload
        return {
            ...state,
            commands: state.commands.map(c => c.id === updated.id ? updated : u)
        }
    },
    deleteCommand(state, action) {
        const command = action.payload
            return {
                ...state,
                commands: state.commands.filter(c => c.id !== command.id)
            }
    }
}

export const CommandsProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CommandsContext.Provider value={{ state, dispatch }}>
            {props.children}
        </CommandsContext.Provider>
    )
}

export default CommandsContext;