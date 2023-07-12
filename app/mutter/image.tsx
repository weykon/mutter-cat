'use client'


export default function ImgComp({url}: {url : string}) {
    return (
        <figure><img loading="lazy" src={url} alt="Shoes" /></figure>
    );
}