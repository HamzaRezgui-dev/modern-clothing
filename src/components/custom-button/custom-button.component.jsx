import React from "react";
import { CustomButtonContainer } from "./custombuttonCont";


const CustomButton = ({children, ...props}) => (
<CustomButtonContainer {...props}>
    { children }
</CustomButtonContainer>
)

export default CustomButton