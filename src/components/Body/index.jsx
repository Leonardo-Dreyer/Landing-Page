import { BodyStyle, BoxInfo, DivBottom, DivImage, DivInfo, DivTitle, IconStyle, Smartwatch, Subtitle, Title } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faBatteryHalf, faMoneyBill, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

import smartwatch from "../../images/body/smartwatch.png";

export default function Body() {
    return (
        <BodyStyle>
            <DivTitle>
                <Title>The right choice at the right time!</Title>
                <Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facilis inventore necessitatibus nemo quidem, dolor sint repudiandae debitis asperiores porro magnam, sapiente laboriosam? Ex eos esse recusandae accusamus quasi placeat?
                </Subtitle>
            </DivTitle>
            <DivBottom>
                <DivImage>
                    <Smartwatch src={smartwatch}/>
                </DivImage>
                <DivInfo>
                    <BoxInfo>
                        <IconStyle>
                            <FontAwesomeIcon color='#c92868' icon={faClock}/>
                        </IconStyle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam odio accusamus quasi nostrum
                    </BoxInfo>
                    <BoxInfo>
                        <IconStyle>
                            <FontAwesomeIcon color='#c92868' icon={faMoneyBill} />
                        </IconStyle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam odio accusamus quasi nostrum
                    </BoxInfo>
                    <BoxInfo>
                        <IconStyle>
                            <FontAwesomeIcon color='#c92868' icon={faBatteryHalf} />
                        </IconStyle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam odio accusamus quasi nostrum
                    </BoxInfo>
                    <BoxInfo>
                        <IconStyle>
                            <FontAwesomeIcon color='#c92868' icon={faShieldAlt} />
                        </IconStyle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam odio accusamus quasi nostrum
                    </BoxInfo>
                </DivInfo>
            </DivBottom>
        </BodyStyle>
    )  
} 