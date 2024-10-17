import PropTypes from "prop-types";
import React from "react";

const DivMaxWidth = ({ children, className = null }) => {
    return (
        <div className={"max-w-[1280px] px-5 m-auto " + " " + className}>
            {children}
        </div>
    );
};

DivMaxWidth.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default DivMaxWidth;
