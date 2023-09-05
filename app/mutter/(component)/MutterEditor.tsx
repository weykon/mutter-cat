'use client'

import { useLayoutEffect, useState } from "react"
import '@/app/globals.css'
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { useRouter } from "next/navigation";
import { useAuthSession } from "@/app/(auth_meta_data)/saver";

export default function MutterEditor() {
    const [value, setValue] = useState<string | undefined>("**Hello world!!!**");
    return (
        <div className="relative flex flex-col justify-start items-center mt-10">
            <AnimaAndDelayRenderCollapes />
        </div>
    )
}


function AnimaAndDelayRenderCollapes() {
    const [value, setValue] = useState<string | undefined>("**Hello world!!!**");
    const [title, setTitle] = useState<string | undefined>("no name");
    const [fontSize, setFontSize] = useState(16);
    const { session } = useAuthSession()!;
    // const [fontSize, setFontSize] = useState(16);
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false)
    return (
        <div className="collapse rounded-md">
            <input type="checkbox" className="" defaultChecked={isEditing} checked={isEditing} onClick={() => void setIsEditing(!isEditing)} />
            <div className="collapse-title text-xl font-medium w-full pl-0 pr-0 flex justify-center">
                <button className="btn btn-primary"> Mutter one second </button>
            </div>
            <div className={`collapse-content`}>
                <div className="max-w-[600px] p-8 rounded-lg bg-base shadow-lg">
                    <div className="flex justify-between p-2 items-center">
                        <div className="flex items-center justify-center">
                            <p>{'Title ->'}</p>
                            <input type="text" className=" input-md dark:text-neutral rounded-md w-24 " value={title} onChange={(e) => void setTitle(e.target.value)} />
                        </div>

                        <div className="flex items-center justify-center">
                            <button onClick={() => {
                                // go full screen
                            }}>
                                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L16 15.8995" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 41.8995L16 32" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M42.0001 41.8995L32.1006 32" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M41.8995 6L32 15.8995" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M33 6H42V15" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M42 33V42H33" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 42H6V33" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 15V6H15" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                            <button className="btn btn-secondary btn-xs"
                                onClick={async () => {
                                    const supabase = createClientComponentClient<Database>();
                                    const { data, error } = await supabase
                                        .from('mutters')
                                        .insert([
                                            { title, content: value, author_id: session?.user.id },
                                        ])
                                    if (error) {
                                        console.log(error)
                                    } else {
                                        console.log(data);
                                        setIsEditing(false);
                                        router.refresh();
                                    }
                                }}
                            >mitar</button>
                        </div>
                    </div>
                    <textarea
                        className="min-h-[300px] p-4 textarea textarea-secondary outline-4 bg-neutral dark:bg-neutral dark:text-neutral-content text-neutral-content text-2xl"
                        placeholder="Bio"
                        onChange={(e) => void setValue(e.target.value)}
                        value={value}
                        style={{ fontSize: `${fontSize}px` }}
                    />

                    <div>
                        <input type="range" id="font-size" name="volume" min="1" max="22" onChange={(e) => { setFontSize(Number(e.target.value) * 2) }} />
                        <label htmlFor="font-size">Font Size</label>
                    </div>
                </div>
            </div>
        </div>
    )
}