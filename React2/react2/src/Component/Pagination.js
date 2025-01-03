import React, { useState } from 'react'
import Data from './Data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagination() {
  const[CurrentPage,setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = CurrentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex , lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  return (
    <div>
      
      <table className='table'>
        <thead>
           <th>ID</th>
           <th>Name</th>
           <th>Email</th>
        </thead>
        <tbody>
          {records.map((d,i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
            </tr>


  ))}
        </tbody>
        
      </table> 
      <nav>
        <ul>
          <li className='pagination'>
            <a href='#' className='page-link'
            onClick={prePage}>Prev</a>














            
          </li>
          {
            numbers.map((n,i)=> (
              <li className={`page-item ${CurrentPage === n ? 'active': ''}`} key={i}>
                <a href='#' className='page-link' 
                onClick={()=>changeCpage(n)}>{n}Touch Me</a>

              </li>
            ))
          }
          <li className='pagination'>
            <a href='#' className='page-link'
            onClick={nextpage}>Next</a>
          </li>
        </ul>
        </nav>
    </div>
  )  
  function prePage(){
    if(CurrentPage !== firstIndex){
      setCurrentPage(CurrentPage - 1)
    }

  }
  function changeCpage(id){
    setCurrentPage(id)

  }
  
  
 function nextpage(){
  if(CurrentPage !== lastIndex){
    setCurrentPage(CurrentPage + 1)
  }

}


}

export default Pagination