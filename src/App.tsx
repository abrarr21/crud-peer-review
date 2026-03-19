import { useState } from "react";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserFrom";
import UserCard from "./components/UserCard";
import type { FormData } from "./components/UserFrom";

function App() {
    const [toggle, setToggle] = useState(true);
    const [villainData, setVillainData] = useState<FormData[]>([]);

    const handleRemove = (index: number) => {
        setVillainData((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <Navbar setToggle={setToggle} toggle={toggle} />
            {toggle ? (
                <UserForm
                    setVillainData={setVillainData}
                    setToggle={setToggle}
                />
            ) : villainData.length === 0 ? (
                <p className="text-center text-[#6b7280] mt-20 text-lg">
                    No villains yet. Add one!
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {villainData.map((elem, index) => (
                        <UserCard
                            key={index}
                            villainData={elem}
                            onRemove={() => handleRemove(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
