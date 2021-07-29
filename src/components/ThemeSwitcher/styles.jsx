import styled from 'styled-components'

export const ThemeSwitcher = styled.div`
    padding: 0 3rem 0 2rem;
    
    #checkbox {
        opacity: 0;
        position: absolute;
    }
    
    .label {
        cursor: pointer;
        height: 26px;
        background-color: #111;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 50px;
        padding: 5px;
        width: 50px;
        position: relative;
    }

    .ball {
        width: 22px;
        height: 22px;
        background-color: #fff;
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: 50%;
        transition: transform 0.2s linear;
    }
    
    #checkbox:checked + .label .ball {
        transform: translateX(24px);
    }

    .moon {
        color: #f1c40f;
    }

    .sun {
        color: #f39c12;
    }
`