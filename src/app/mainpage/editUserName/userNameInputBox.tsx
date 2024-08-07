export default function UsernameInputBox(props:{platform_name:string}){
    return(
        <div className="flex justify-center item-center h-[15%] w-[80%] m-[1vh] border-solid border-[2px] p-[1vw] rounded-[15px]">
            <h1 className="flex justify-center item-center w-[50%] text-[2.5vw]">{props.platform_name}:</h1>
            <input type="text" className="flex justify-center item-center w-[50%] text-[2.5vw] text-[#151515] text-center rounded-[15px] align-center" />
        </div>
    )
}