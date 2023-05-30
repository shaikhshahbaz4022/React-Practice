function MyButton(props){
 const   {ButtonText,btnColor,handleOnclicked} = props


 
    return <button onClick={handleOnclicked}  style={{backgroundColor:btnColor}} >{ButtonText}</button>
}
export default MyButton