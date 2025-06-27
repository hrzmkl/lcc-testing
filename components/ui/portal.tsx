import React, { useEffect, ReactNode} from "react";
import ReactDOM from "react-dom";

export type TypeProps = {
    children?: ReactNode | string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
const Portal = ({ children} : TypeProps) => {
    const portalRoot = document.getElementById("portal-root");

    if (!portalRoot) {
        const root = document.createElement("div");
        root.id = "portal-root";
        document.body.appendChild(root);
        return ReactDOM.createPortal(children, root);
    }

    return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;