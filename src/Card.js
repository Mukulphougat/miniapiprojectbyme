import "./cardStyle.css"
export default function Card(props){
    return(
        <div className={"card-container1"}>
            <img className={"profile"} width={100} height={100} src={props.data.picture.large} alt={"profile"}/>
            <div className={"info"}>
                <div className={"name"}>{props.data.name.title+" "+props.data.name.first+" "+props.data.name.last}</div>
                <div className={"details"}>{props.data.location.street.number+" "+props.data.location.street.name+" "+props.data.location.city+" "+props.data.location.state+" "+props.data.location.country+" "+props.data.location.postcode}</div>
                <div className={"details"}>{props.data.location.timezone.offset+" "+props.data.location.timezone.description}</div>
                <div className={"details"}>{props.data.gender.charAt(0).toUpperCase()+props.data.gender.slice(1).toLowerCase()}</div>
            </div>
        </div>
    )
}
