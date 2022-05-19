import React from 'react';
import { User } from '../types';

interface Props {
    userSelected: User | undefined
    setUser: (user: User | undefined) => void;
}

const defaultValues = {
    userSelected: undefined,
    setUser: (() => { })
}

/**
 * React Context to share data between screens
 */
export default React.createContext<Props>(defaultValues);