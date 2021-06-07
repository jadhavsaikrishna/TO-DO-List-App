import React from 'react';
import './ListItems.css'

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        
        {
           return <div className="list" key={item.key}>
               
           
           <p>{item.text}
           <span>
           <i class="fas fa-trash"
           onClick={()=> props.deleteItem(item.key)}></i>
           </span>
           </p>
            
           </div>
        }
        )
    return(
        <div>{listItems}</div>
    )
}
export default ListItems;