'use client';

import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import MDPreview from "@uiw/react-markdown-preview"
import { useState } from "react";

export default function MD({ data }: { data: any }) {
    const [editing, setEditing] = useState(false);
    const [editingContent, setEditingContent] = useState(data?.content ?? 'sorry, no content');
    return (
        <div className="flex min-w-full justify-center bg-base">
            {
                editing ? null
                    :
                    <MDPreview
                        prefixCls={'card p-4 bg-neutral dark:bg-neutral text-neutral-content'}
                        source={editingContent ?? 'sorry, no content'} style={{ whiteSpace: 'pre-wrap', padding: '1rem', fontSize: '1.5rem' }}
                    />
            }
            {
                editing
                &&
                <textarea className="min-h-[300px] p-4 textarea textarea-secondary outline-4 bg-neutral dark:bg-neutral dark:text-neutral-content text-neutral-content text-2xl"
                    placeholder="Bio"
                    onChange={(e) => void setEditingContent(e.target.value)}
                    value={editingContent}
                />
            }
            <div className="flex flex-col bg-base ml-2 rounded-md">
                <button onClick={() => void setEditing(!editing)}>
                    <svg className=" stroke-primary w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 48 48">
                        <path stroke="#c2a2a2" d="m31 9 8 8M8 32 36 4l8 8-28 28-10 2 2-10ZM31 9l8 8M9 32l7 7m-3-4 22-22" /></svg>
                </button>
                {
                    editing && <button onClick={async () => {
                        const supabase = createClientComponentClient<Database>();
                        const { data: backData, error } = await supabase
                            .from('mutters')
                            .update({ content: editingContent })
                            .eq('id', data?.id)
                            .select().single();
                        if (error) {
                            console.log(error);
                            setEditingContent(data.content);
                        } else {
                            setEditing(false);
                            setEditingContent(backData?.content ?? 'sorry, no content');
                        }
                    }}>
                        <svg
                            className="w-10 h-10 fill-current text-primary"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
                            <path stroke="#c2a2a2" d="M6 9c0-2 1-3 3-3h25l8 7v26c0 2-1 3-3 3H9c-2 0-3-1-3-3V9Z" />
                            <path fill="#FFF" d="M24 6v7l-1 1h-8l-1-1V6" />
                            <path stroke="#FFF" d="M24 6v7l-1 1h-8l-1-1V6h10Z" />
                            <path stroke="#c2a2a2" d="M9 6h25" />
                            <path stroke="#FFF" d="M14 26h20m-20 8h10" />
                        </svg>
                    </button>
                }
            </div>
        </div>
    )
}
