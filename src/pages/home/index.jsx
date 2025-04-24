import { Link } from 'react-router-dom';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighlight } from './styles';
 
const Home = () => {
    return ( <>   
     <Header>
        <Container>
            <div>
                <Title>

                    <TitleHighlight>
                        Implemente
                        <br></br>
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                Domine as tecnologias utilizdas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.

                </TextContent>
            </div>
            <div>
                <img src="" alt="Main image"/>
            </div>
        </Container>
     </Header>
    
</>
)
}

export { Home }