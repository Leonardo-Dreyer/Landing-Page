import { PageNav, PageNavTitle, PageNavMenu, PageNavTitleDiv, ImgNav } from './styles';
import Cart from '../../images/navbar/cart.svg'

export default function Home() {
    return (
        <>
            <PageNav>
                <PageNavTitleDiv>
                    <ImgNav src={Cart}/>
                    <PageNavTitle>PONNO</PageNavTitle>
                </PageNavTitleDiv>
                <PageNavTitleDiv>
                    <PageNavMenu>Home</PageNavMenu>
                    <PageNavMenu>Products</PageNavMenu>
                    <PageNavMenu>Promotions</PageNavMenu>
                    <PageNavMenu>News</PageNavMenu>
                    <PageNavMenu>Contact</PageNavMenu>
                </PageNavTitleDiv>   
            </PageNav>     
        </>
    );
}