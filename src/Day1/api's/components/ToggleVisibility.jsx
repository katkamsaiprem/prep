import { useState } from "react";

const ToggleVisibility = () => {

    const [isClicked, setIsClick] = useState(false);
    const TextVisibilityHandler = (e) => {
        setIsClick(!isClicked);
        console.log();

        if (isClicked === true)
            e.target.innerHTML = "Hide Details"
        else
            e.target.innerHTML = "Click Me"
    }

    return (
        <>
            <button className="" onClick={(e) => TextVisibilityHandler(e)}>Click Me</button >
            {
                isClicked && <p>kajsdlfkajslkdfjalsd</p>
            }
        </>
    )
}

export default ToggleVisibility;