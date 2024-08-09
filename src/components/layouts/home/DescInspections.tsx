import { FaArrowRight } from "react-icons/fa6";

const DescInspections = () => {
    return (
        <article className="pr-[30%] text-dark">
            <div className="">
                <h1 className="font-semibold text-4xl  mb-5">A thorough car inspection - CarAudit™️</h1>
                <p className="mb-5 text-sm ">A qualified mechanic will thoroughly inspect your chosen car. You will receive a detailed report about the technical condition of the car, photo documentation, and our advice. You just take your time and decide.</p>
                <button className="mb-5 flex items-center p-3 bg-secondary text-white rounded-md">More About CarAudit<FaArrowRight /></button>
            </div>
            <div className="flex gap-3 flex-col border-t">
                <p className="text-sm font-light  mt-3">“I've never experienced knowing so much about a car in advance.”</p>
                <div className="flex items-center gap-2">
                    <img src="/img/profile-pic-2.jpg" alt="customer"  className="w-7 h-7 rounded-full"/>
                    <p className="text-xs font-medium">Sakha Naufal</p>
                    <p className="text-xs font-light">Customer</p>
                </div>
            </div>
        </article>
    )
}

export default DescInspections;