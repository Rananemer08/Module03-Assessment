// import React from 'react'

// import './Articles.css'
// import Help from '../../Assets/help.webp'
// import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
// import ProgressBar from 'react-bootstrap/ProgressBar';

// const  Articles = () => {
//   const [title,setTitle] = useState("")
//   const [Author, SetAuthor] = useState("")
//   const [type, SetType] = useState("")
//   const [description, SetDescripton] = useState("")

//   // or i can put alle these usestate in one 
//   const [data, SetData] = useState("")

//   const fetchData = async()=>{
//     try{
//     const response = await axios.get(`http://localhost:8100/articles/`)
//     if(response.status === 200){
//       setData(response.data.data)
//     }}
//     catch(error){
//       toast.error('something went wrong ERROR')
//     }

//   }

//   useEffect(() => {
    
    
   
//     fetchData()
//   }, []);
  
//   return (
// <>

//         <div className="Campaign-Card-Component">
//       <img variant="top" src={Help} />
//       <div className='Capmaign-Card-label'>
       
//       </div>    
//       <div className='Campaign-Card-Basic-Info'> 
//       <div className='Campaign-Card-project-title-with-icon'>
//         <h3>{title}</h3> 
//         <IoBookmark/>
               
//       </div>
     
//       <div className='Campaign-Card-Descripton'>
//         <p className='Campaign-p-description'>{SetDescripton}</p>
//         <ProgressBar animated now={now} label={`${now}%`} variant='warning text-dark'/>
//         <div className='Campaign-Card-stats'><p>Type: {type}</p><h6>Author:{Author}</h6></div>
//       </div>

      
//       {data.map((item)=>(
//         <Notification key={item.id} title={item.title} 
//         Auhthor={item.Author}>  type={item.type}  desc</Notification>
        
//  ))}
      

//       </div> 
//       </div>
// </>
//   )
// }

// export default Articles
