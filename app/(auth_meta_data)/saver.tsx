'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { AuthChangeEvent, Session, UserMetadata } from '@supabase/supabase-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthMetaDataContextValue {
    authMetaData: UserMetadata | undefined;
}

export const AuthMetaDataContext = createContext<AuthMetaDataContextValue>({
    authMetaData: undefined,
});

export const AuthMetaDataProvider = ({ children, authMetaData }: {
    children: React.ReactNode;
    authMetaData: UserMetadata | undefined;
}) => {

    // listen for auth changes
    useEffect(() => {
        const supabase = createClientComponentClient();
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
            console.log('event', event);
            console.log('session on auth changed', session);
            if (event === 'TOKEN_REFRESHED') {
                console.log('TOKEN_REFRESHED')
            }
        });
        return () => subscription.unsubscribe();
    }, [])


    return (
        <AuthMetaDataContext.Provider value={{ authMetaData }}>
            {children}
        </AuthMetaDataContext.Provider>
    );
};

export const useAuthMetaData = () => {
    const { authMetaData } = useContext(AuthMetaDataContext);
    return authMetaData;
};

