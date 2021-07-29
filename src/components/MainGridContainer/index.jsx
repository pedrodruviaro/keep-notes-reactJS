import styled from "styled-components";

const MainGridContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 13rem 1fr;
    grid-template-rows: 5vh 1fr;
    grid-template-areas: "header header"
                        "aside main";
`

export default MainGridContainer