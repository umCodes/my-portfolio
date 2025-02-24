import './Background.css'



// eslint-disable-next-line react/prop-types
export default function BgInfo({subInfo, Info}){

    return(
        <div className='info'>
            <p>{subInfo}</p>
            <h3>{Info}</h3>    
        </div>
    )
}