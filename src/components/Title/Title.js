import styled from 'styled-components';

const StyledTitle = styled.h2`
    text-align: center;
    margin: 0.83em;
    font-size: 2rem;
    color: ${props => (props.darkmode ? 'var(--primary-fontcolor)' : 'var(--secondary-fontcolor)')};
    @media (max-width: 425px) {
        font-size: 1.4rem;
    }
`

const StyledBracket = styled.span`
    color: var(--primary-color);
`

const Title = ({ title, darkmode }) => {
    return (
        <StyledTitle darkmode={darkmode}>
            <StyledBracket>{'< '}</StyledBracket>{ title }
            <StyledBracket>{' >'}</StyledBracket>
        </StyledTitle>
    )
}

export default Title;