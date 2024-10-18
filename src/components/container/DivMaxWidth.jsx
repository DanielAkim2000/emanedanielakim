import PropTypes from "prop-types";
import { forwardRef } from "react";

const DivMaxWidth = forwardRef(
    ({ children, className = null, id = null }, ref) => {
        return (
            <div
                id={id}
                className={"max-w-[1200px] px-5 m-auto " + " " + className}
                ref={ref}
            >
                {children}
            </div>
        );
    }
);

DivMaxWidth.displayName = "DivMaxWidth";

DivMaxWidth.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    ref: PropTypes.object,
    id: PropTypes.string,
};

export default DivMaxWidth;
