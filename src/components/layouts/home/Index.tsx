import SearchFilter from "../../fragments/SearchFilter";

const Index = () => {
    return (
        <main>
            <div className="w-full pt-28 p-[5%] h-96 text-white reviewImgMobile lg:w-full  lg:h-[40rem] xl:h-[40rem] reviewImg xl:w-full ">
                <div className="xl:w-[40rem] ">
                    <h1 className="xl:text-[41px] text-[23px] font-semibold">You choose your car online. We inspect it and deliver it.</h1>
                </div>
                <div className="mt-10">
                    <SearchFilter />
                </div>
            </div>
            <div className="">

            </div>
        </main>
    )
}

export default Index;