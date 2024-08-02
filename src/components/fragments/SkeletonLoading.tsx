interface loadingProps {
    width: string;
    height: string;
    margin: string;
}

const SkeletonLoading = ({ width, height, margin }: loadingProps) => {
    return (
        <div className={`${height ? height : 'h-2'} ${margin ? margin : 'm-0'} bg-neutral-500 rounded-lg ${width ? width : 'w-full'} skeleton`}></div>
    );
};

export default SkeletonLoading;