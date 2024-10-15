import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface PositionsSkeletonProps {
    cards: number; // Define the type for the cards prop
}

const PositionsSkeleton : React.FC<PositionsSkeletonProps> = ({ cards }) => {
    return (
        <>
            {Array(cards).fill(0).map((_, i) => (
                <div
                    className="w-[90%] relative flex my-6 justify-between cursor-pointer px-10 py-10 border-[1px] border-[#e0e1e9] rounded-lg"
                    key={i}
                >
                    <div className="flex flex-col items-start justify-center">
                        <div className="flex gap-10">
                            <Skeleton width={300} height={30} />
                            <Skeleton width={100} height={30} />
                        </div>
                        <Skeleton width={80} height={20} />
                        <div className="pt-6 flex items-center gap-10">
                            <div className="flex items-center justify-center gap-2">
                                <Skeleton width={80} height={15} />
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <Skeleton width={80} height={15} />
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <Skeleton width={80} height={15} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Skeleton width={200} height={50} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default PositionsSkeleton;
