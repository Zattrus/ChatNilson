import styled from "styled-components";

export const Container = styled.div`
    background-color: #f0f2f5;
    height:100%;
    width: 65px;
    border-right: 2px solid #e9edef;
    position: relative;
    display:flex;
    flex-direction:column;

    img {
        height:35px;
        width: 35px;
    }
    
    .siderBar-footer {
        position: absolute;
        bottom: 10px;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .siderbar-avatar {
            cursor: pointer
        }
    }
`;

export const SIconWrapper = styled.div`
    display:flex;
    width: 100%;
    color: #f0f2f5;
    margin-top: 10px;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    font-size:15px;
    margin-bottom: 10px;

    .icon {
        color: #54656f;
        font-size: 24px;
    }
`;

export const IconSelectedWrapper = styled.div<{ selected: boolean }>`
    display:flex;
    background-color:${(props) => props.selected && '#e8e8e8'};
    color:${(props) => props.selected && 'white'};
    height: 40px;
    width: 40px;
    border-radius:5px;

    align-items:center;
    justify-content:center;
    position:relative;

    .popNumber{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 11px;
        opacity: 0.7;
        background: orange;
        border-radius: 10px;
        padding-left: 2px;
        padding-right: 2px;
        color: white;
    }

    &:hover {
        background-color:${(props) => !props.selected && '#e8e8e8'};
    }

    &:active {
        background-color:${(props) => !props.selected && '#cacaca'};
    }

`;