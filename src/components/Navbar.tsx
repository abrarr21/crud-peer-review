type NavbarProps = {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: boolean;
};
const Navbar = ({ setToggle, toggle }: NavbarProps) => {
    return (
        <nav className=" px-6 py-6 bg-[#0a0a0f] border-b border-[#e94560] flex items-center justify-between">
            <div>
                <img
                    src="https://static1.squarespace.com/static/6354d54c55988406dcc86105/t/6354e5323017d770b852d60f/1666508082720/VillainsTextLogo.png?format=1500w"
                    alt="Villains Club"
                    className="h-10 w-auto"
                />
            </div>
            <button
                onClick={() => setToggle((prev) => !prev)}
                className=" cursor-pointer px-4 py-2 rounded-lg font-semibold text-white bg-[#e94560] hover:bg-[#c73652] transition"
            >
                {toggle ? "Show Cards" : "+ Add Villains"}
            </button>
        </nav>
    );
};
export default Navbar;
