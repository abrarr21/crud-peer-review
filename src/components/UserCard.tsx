import type { FormData } from "./UserFrom";

type CardProps = {
    villainData: FormData;
    onRemove: () => void;
    setEditData: (data: FormData | null) => void;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserCard = ({
    villainData,
    onRemove,
    setToggle,
    setEditData,
}: CardProps) => {
    return (
        <div className="rounded-lg bg-[#1a1025] border border-[#e94560] overflow-hidden  mt-6">
            <img
                src={villainData.imageUrl}
                alt="alt"
                className="w-full h-[30vh] object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold text-[#eaeaea]">
                    {villainData.name}
                </h2>
                <p className="text-sm text-[#6b7280] mb-4">
                    {villainData.reference}
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={() => {
                            setEditData(villainData);
                            setToggle(true);
                        }}
                        className="flex-1 py-2 rounded-lg text-sm font-semibold cursor-pointer bg-[#e94560] hover:bg-[#c73652] text-white transition"
                    >
                        Update
                    </button>
                    <button
                        onClick={onRemove}
                        className="flex-1 py-2 rounded-lg text-sm font-semibold cursor-pointer bg-[#0a0a0f] border border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white transition"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
