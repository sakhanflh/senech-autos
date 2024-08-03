interface iconProps {
    style: any;
}

const SenechIcon = ({ style }: iconProps) => {
    return (
        <div className={style}>
            <img src="/img/senech autos[blue, white].png" alt="senech icon" className="object-cover w-full h-full" />
        </div>
    )
}

export default SenechIcon;