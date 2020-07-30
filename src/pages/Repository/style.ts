import styled from 'styled-components';


export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;  
        font-size: 12px;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;

        }

    }

    svg {
        margin-right: 4px;
    }

`;

export const RepositoryInfo = styled.section`
    header {
        display: flex;
        margin-top: 80px;
        align-items: center;
    }

    img {
        width: 162px;
        height: 152px;
        border-radius: 50%;
    }

    div {
        margin-left: 13px;
    }

    strong {
        font-size: 36px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: #3D3D4D;
    }

    p {
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: #6c6c80;
    }

    ul {
        display: flex;
        margin-top: 50px;

        li {
            display: flex;
            flex-direction: column; 
            
            & + li {
                margin-left: 80px;
            }
        }
    }


`

export const IssuesSection = styled.section`
    a {
        margin-top: 80px;
        display: flex;
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px 24px 24px 0px;
        text-decoration: none;
        align-items: center;  
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
           transform: translateX(10px); 
        } 


        div {
            flex: 1;
            margin-left: 24px;
        }

        strong {
            font-size: 24px;
            font-weight: bold;
            color: #3D3D4D;
        }

        p {
            font-size: 18px;
            color: #6c6c80;
            margin-top: 8px;
        }

        svg {
            color: #C9C9D4;
        }
    }


`;