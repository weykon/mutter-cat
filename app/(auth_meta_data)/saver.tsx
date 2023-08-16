'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { AuthChangeEvent, Session, UserMetadata } from '@supabase/supabase-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthMetaDataContextValue {
    session: Session | undefined;
    authMetaData: UserMetadata | undefined;
}

export const AuthSessionContext = createContext<AuthMetaDataContextValue>({
    authMetaData: undefined,
    session: undefined,
});

export const AuthSessionProvider = ({ children, authMetaData, session }: {
    children: React.ReactNode;
    authMetaData: UserMetadata | undefined;
    session: Session | undefined;
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
        <AuthSessionContext.Provider value={{ authMetaData, session }}>
            {children}
        </AuthSessionContext.Provider>
    );
};

export const useAuthSession = () => {
    return useContext(AuthSessionContext);
};
