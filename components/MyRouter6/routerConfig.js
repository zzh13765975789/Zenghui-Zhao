import React from "react";

import About from "./About"
import Home from "./Home"

const routes=[
    {
        path:"/",
        exact:true,
        sidebar:()=><div>AA</div>,
        main:()=><About />
    },
    {
        path:"/bb",
        sidebar:()=><div>BB</div>,
        main:()=><Home />
    },
    {
        path:"/cc",
        sidebar:()=><div>CC</div>,
        main:()=><h2>cc</h2>
    }
]

export default routes;