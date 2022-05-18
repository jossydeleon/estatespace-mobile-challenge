import React, { useMemo, useState } from 'react';
import { User } from '../types';
import DataContext from './DataContext';

const DataProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<User | undefined>();

    const shared = useMemo(() => ({
        userSelected: user,
        setUser,
    }), [user, setUser]);

    return (
        <DataContext.Provider value={shared}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;