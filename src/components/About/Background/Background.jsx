/* eslint-disable react/jsx-key */
import './Background.css'
import BgInfo from './BgInfo'



// eslint-disable-next-line react/prop-types
export default function Background({title, backgrounds}){

    return(
        <div className='background'>
            <h1>{title}</h1>
            {(backgrounds || []).map(bg => (<BgInfo key={bg.id} subInfo={bg.subInfo} Info={bg.Info}/>))}
        </div>
    )
}