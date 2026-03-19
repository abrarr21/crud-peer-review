import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

export type FormData = {
    id: string;
    name: string;
    reference: string;
    imageUrl: string;
};

type UserFormProps = {
    setVillainData: React.Dispatch<React.SetStateAction<FormData[]>>;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    setEditData: React.Dispatch<React.SetStateAction<FormData | null>>;
    editData: FormData | null;
};

function UserForm({
    setVillainData,
    setToggle,
    setEditData,
    editData,
}: UserFormProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: "onChange",
        defaultValues: editData ?? undefined,
    });

    const handleSubmitForm = (data: FormData) => {
        if (editData) {
            setVillainData((prev) => {
                return prev.map((val) => {
                    return val.id === editData.id ? { ...val, ...data } : val;
                });
            });
            setEditData(null);
        } else {
            setVillainData((prev) => [...prev, { ...data, id: nanoid() }]);
        }
        reset();
        setToggle(false);
    };

    return (
        <div className="min-h-screen flex justify-center items-center px-4 bg-[#0a0a0f]">
            <div className="w-full max-w-md mx-auto p-5 rounded-lg bg-[#1a1025] border border-[#e94560]">
                <h1 className="text-4xl font-semibold text-center mb-8 text-[#e94560]">
                    Join the Club
                </h1>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-[#eaeaea]">
                            Villain Name
                        </label>
                        <input
                            {...register("name", {
                                required: "Villain Name is required",
                                minLength: {
                                    value: 3,
                                    message:
                                        "Name must contain atleast 3 characters",
                                },
                                validate: (val) =>
                                    val.trim() !== "" || "Name cannot be empty",
                            })}
                            type="text"
                            placeholder="e.g. Joker"
                            className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e94560] bg-[#0a0a0f] border border-[#6b7280] text-[#eaeaea]"
                        />
                        {errors.name && (
                            <p className="text-[#e94560] mt-2">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-[#eaeaea]">
                            Movie / Anime Reference
                        </label>
                        <input
                            {...register("reference", {
                                required: "Reference is required",
                                minLength: {
                                    value: 4,
                                    message:
                                        "Reference must contain atlreast 4 characters",
                                },
                                validate: (val) =>
                                    val.trim() !== "" ||
                                    "Reference cannot be empty",
                            })}
                            type="text"
                            placeholder="e.g. The Dark Knight"
                            className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e94560] bg-[#0a0a0f] border border-[#6b7280] text-[#eaeaea]"
                        />
                        {errors.reference && (
                            <p className="text-[#e94560] mt-2">
                                {errors.reference.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2 text-[#eaeaea]">
                            Image URL
                        </label>
                        <input
                            {...register("imageUrl", {
                                required: "Image URL is required",
                                pattern: {
                                    value: /^https?:\/\/.+/i,
                                    message: "Enter a valid image URL",
                                },
                            })}
                            type="url"
                            placeholder="https://example.com/villain.jpg"
                            className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e94560] bg-[#0a0a0f] border border-[#6b7280] text-[#eaeaea]"
                        />
                        {errors.imageUrl && (
                            <p className="text-[#e94560] mt-2">
                                {errors.imageUrl.message}
                            </p>
                        )}
                    </div>
                    <button
                        disabled={!isValid}
                        type="submit"
                        className={`w-full py-3 cursor-pointer rounded-lg text-md font-semibold transition ${!isValid ? "bg-gray-400" : "bg-[#e94560] hover:bg-[#c73652]"} text-white`}
                    >
                        Add Villain
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserForm;
