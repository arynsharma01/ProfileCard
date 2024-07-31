export default function Card({setColor}){
    return(
        <div className="flex justify-evenly  mx-80 shadow-xl  bg-white ">
            <button className="bg-blue-500 border-spacing-1 rounded-md border-black px-4 py-2" onClick={()=>{
                setColor("blue");
            }}>Blue </button>
            <button className="bg-red-500 border-spacing-1 rounded-md border-black px-4 py-2" onClick={()=>{
                setColor("red");
            }}>Blue </button>
            <button className="bg-yellow-500 border-spacing-1 rounded-md border-black px-4 py-2" onClick={()=>{
                setColor("yellow");
            }}>Yellow </button>
            <button className="bg-orange-500 border-spacing-1 rounded-md border-black px-4 py-2" onClick={()=>{
                setColor("orange");
            }}>Orange </button>
            <button className="bg-green-500 border-spacing-1 rounded-md border-black px-4 py-2 text-white" onClick={()=>{
                setColor("green");
            }}>Black </button>
            <button className="bg-cyan-500 border-spacing-1 rounded-md border-black px-4 py-2" onClick={()=>{
                setColor("cyan");
            }}>Black </button>
        </div>
    )
}