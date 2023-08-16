'use client'

import { useState } from "react"
import MDEditor from '@uiw/react-md-editor';
import './index.module.css'

export default function MutterEditor() {
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState<string | undefined>("**Hello world!!!**");

    return (
        <div className="relative flex flex-col justify-start items-center mt-10">
            <AnimaAndDelayRenderCollapes />
            {

            }
        </div>
    )
}


function AnimaAndDelayRenderCollapes() {
    const [value, setValue] = useState<string | undefined>("**Hello world!!!**");

    // const [fontSize, setFontSize] = useState(16);

    return (
        <div className="collapse rounded-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium w-[300px] flex justify-center">
                <button className="btn btn-primary"> Mutter one second </button>
            </div>
            <div className="collapse-content">
                <div className="max-w-[600px]">
                    <div className="flex justify-end p-2 items-center">
                        <button onClick={() => {
                            // go full screen
                        }}>
                            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L16 15.8995" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 41.8995L16 32" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M42.0001 41.8995L32.1006 32" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M41.8995 6L32 15.8995" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M33 6H42V15" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M42 33V42H33" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 42H6V33" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 15V6H15" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>
                    <MDEditor
                        value={value}
                        onChange={setValue}
                        hideToolbar={true}
                        preview="edit"
                    />
                    <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
                </div>
            </div>
        </div>
    )
}

// function Editor() {
//     return (
//     <div className="">
//         <div className=" bg-neutral-200 rounded-lg flex p-2 mt-2">
//             <div className="flex flex-1"></div>
//             <div className="flex flex-1 btn-square justify-end">
//                 <button onClick={() => {
//                     // go full screen
//                 }}>
//                     <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L16 15.8995" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 41.8995L16 32" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M42.0001 41.8995L32.1006 32" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M41.8995 6L32 15.8995" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M33 6H42V15" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M42 33V42H33" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 42H6V33" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 15V6H15" stroke="#c2a2a2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                 </button>
//             </div>
//         </div>
//         <div className="container bg-neutral-100 w-96 p-2 h-auto rounded-lg">
//             <MDEditor
//                 value={value}
//                 onChange={setValue}
//                 hideToolbar={true}
//             />
//             <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
//         </div>
//     </div>
//     )

// }