import {
    FooterContainer,
    Div,
    FooterIcons,
    Clock,
    Logo,
    P,
    Paragraphs,
    Copyright
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitterSquare,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import ClockImg from '../../images/footer/clock.png';

export default function Footer() {
    return (
        <FooterContainer>
            <Logo>
                <Clock src={ClockImg}></Clock>
            </Logo>
            <Div>
                <FooterIcons>
                    <FontAwesomeIcon icon={faFacebook} size="2x" color="#f0f0f0" cursor="pointer" />
                    <FontAwesomeIcon
                        icon={faTwitterSquare}
                        size="2x"
                        color="#f0f0f0"
                        cursor="pointer"
                    />
                    <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        color="#f0f0f0"
                        cursor="pointer"
                    />
                </FooterIcons>
                <Paragraphs>
                    <P>Contact</P>
                    <P>Products</P>
                    <P>About</P>
                    <P>Others</P>
                </Paragraphs>
                <Copyright>
                    {' '}
                    &copy; Clocks, 2022. All Rights Reserved.{' '}
                </Copyright>
            </Div>
        </FooterContainer>
    );
}
