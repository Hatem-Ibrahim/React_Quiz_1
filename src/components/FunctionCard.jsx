export default function FunctionCard({ logo, title, description }) {
    return (
        <div className='card'>
            <img src={logo} alt="this is logo react js" />
            <h3>{title}</h3>
            <p>{description} </p>
        </div>
    )
}
