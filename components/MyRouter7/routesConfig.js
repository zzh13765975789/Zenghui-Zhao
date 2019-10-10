import React from "react";
import Home from "./Home";
import About from "./About";
import User from "./User";

let arr=[
    {
        path:"/",
        exact:true,
        url:"/",
        linkName:"首页",
        component:Home
    },
    {
        path:"/about",
        url:"/about",
        linkName:"关于",
        component:About
    },
    {
        path:"/user",
        url:"/user",
        linkName:"用户",
        component:User
    }
]

export default arr;