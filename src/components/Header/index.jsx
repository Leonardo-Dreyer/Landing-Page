import { HeaderDiv, HeaderMain, HeaderText, HeaderTextTitle, ImgHeader, HeaderButton } from './styles';
import {} from './style.css';
//import Clock from '../../images/header/relogio.png';
import ClockFooter from '../../images/footer/clock3.png';

export default function Home() {
    return (
        <>
                <HeaderMain>
                    <HeaderDiv>
                        <HeaderTextTitle>
                            Best digital watch for you daily life
                        </HeaderTextTitle>
                        <HeaderText>
                            The best watch ever created in recent years, a powerful processor and a unique and modern design
                        </HeaderText>
                        <HeaderButton>
                            Buy Now
                        </HeaderButton>
                    </HeaderDiv>
                    <HeaderDiv>
                        <ImgHeader src={ ClockFooter }/>
                    </HeaderDiv>
                </HeaderMain>  
        </>
    );
}