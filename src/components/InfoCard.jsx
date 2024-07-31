export function InfoCard(){
    return(
        <div className="flex  justify-around w-96 border-2 p-5">
            <div className="flex flex-col items-center ">
                <div className="font-bold"> 200k </div>
                <div className="font-extralight text-gray-500">Followers</div>
            </div>
            <div className="flex flex-col items-center ">
                <div className="font-bold"> 321k </div>
                <div className="font-extralight text-gray-500">Likes </div>
            </div>
            <div className="flex flex-col items-center ">
                <div className="font-bold"> 200k </div>
                <div className="font-extralight text-gray-500">Photos</div>
            </div>
        </div>
    )
}