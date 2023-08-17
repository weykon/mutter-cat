'use client';

import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import MDPreview from "@uiw/react-markdown-preview"
import { useState } from "react";

export default function MD({ data }: { data: any }) {
    const [editing, setEditing] = useState(false);
    const [editingContent, setEditingContent] = useState(data?.content ?? 'sorry, no content');
    return (
        <div className=" card min-h-[600px] relative">
            {editing ? null : <MDPreview
                source={editingContent ?? 'sorry, no content'} style={{ whiteSpace: 'pre-wrap', borderRadius: '0.9rem', padding: '1rem', fontSize: '1.5rem' }}
            />}
            <div className="flex flex-col absolute -right-10 top-0">
                <button onClick={() => void setEditing(!editing)}>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#icon-726cf86a52696ccc)"><path d="M30.9995 8.99902L38.9995 16.999" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.99953 31.999L35.9994 4L43.9995 11.999L15.9995 39.999L5.99951 41.999L7.99953 31.999Z" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M30.9995 8.99902L38.9995 16.999" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.99951 31.999L15.9995 38.999" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.9995 34.999L34.9995 12.999" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="icon726cf86a52696ccc"><rect width="48" height="48" fill="#FFF" /></clipPath></defs></svg>
                </button>
                <button onClick={async () => {
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
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z" fill="#c2a2a2" stroke="#c2a2a2" strokeWidth="4" strokeLinejoin="round" /><path fillRule="evenodd" clipRule="evenodd" d="M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6" fill="#FFF" /><path d="M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z" stroke="#FFF" strokeWidth="4" strokeLinejoin="round" /><path d="M9 6H34.2814" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 26H34" stroke="#FFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 34H24.0083" stroke="#FFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            </div>
            {
                editing && <textarea className="textarea textarea-secondary bg-neutral text-2xl min-h-[300px] min-w-[300px]" placeholder="Bio" onChange={(e) => void setEditingContent(e.target.value)} value={editingContent}></textarea>
            }
        </div>
    )
}
