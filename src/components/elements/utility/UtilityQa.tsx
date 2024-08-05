import UtilityQaDesktop from "./UtilityQaDesktop"
import UtilityQaMobile from "./UtilityQaMobile"

const UtilityQa = () => {
    return (
        <div className="w-full">
            <div className="xl:block hidden -translate-y-20">
                <UtilityQaDesktop/>
            </div>
            <div className="xl:hidden">
                <UtilityQaMobile />
            </div>
        </div>
    )
}

export default UtilityQa