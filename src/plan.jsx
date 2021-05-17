function Plan(props){
    return <> 
    <div className="row">
    <div className="col-sm-10">
    <li className="p-2 my-2">
        {props.value}
    </li>
    </div>
    <div className="col-sm-2">
    <button className="btn btn-danger" onClick={()=>{props.sendData(props.ids)}}>Delete</button>
    </div>
    </div>
    </>
}

export default Plan