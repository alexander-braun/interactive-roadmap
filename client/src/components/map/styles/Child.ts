import styled from 'styled-components';

interface CardWrapper {
  center: boolean;
  notRecommended: boolean;
  notRecommendedOption: boolean;
}
export const CardWrapper = styled.div`
  border: 1.5px dashed transparent;
  border-radius: 0.25rem;
  padding: 1rem 1rem;
  background: white;
  text-align: center;
  font-size: 1.5rem;
  width: fit-content;
  max-width: 30rem;
  margin: 2vh 0;
  letter-spacing: 0.1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 3vh;
  flex-wrap: wrap;
  box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, border 0.3s, background 0.1s;

  &:hover {
    border: 1.5px dashed rgba(22, 22, 22, 0.8);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px;
    transform: scale(1.01);
    background-color: ${(props: CardWrapper) => {
      return (props.notRecommendedOption || props.notRecommended) && '#ebebeb;';
    }};
  }

  background-color: ${(props: CardWrapper) => {
    return props.center
      ? '#ffff00'
      : props.notRecommended || props.notRecommendedOption
      ? '#d4d4d4;'
      : 'white';
  }};
  font-weight: ${(props: CardWrapper) => props.center && '600'};
  font-size: ${(props: CardWrapper) => props.center && '1.75rem'};
  letter-spacing: ${(props: CardWrapper) => props.center && '0'};
  width: ${(props: CardWrapper) => props.center && '10vw'};
`;
