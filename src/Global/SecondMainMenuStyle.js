import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 620px) {
    flex-flow: column wrap;
  }
`;

export const MenuContainer = styled.ul`
  display: grid;
  max-height: 50vh;
  grid-template-columns: repeat(6, 1fr);
  margin: 30px;
  gap: 10px;

  @media (max-width: 870px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

export const DataMenu = styled.ul`
  max-height: 30vh;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin: 30px;
  justify-content: center;
  align-content: space-between;
`;

export const DataMenuItem = styled.li`
    background-color: #1C1C1A;
    min-height: 40px;
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;

   &:hover{
    background-color: #3A3A37;
   }
`;

export const MenuItem = styled.li`
  background-color: #1C1C1A;
  height: 40px;
  padding: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:hover{
    background-color: #3A3A37;
   }
`;

export const MenuItemDecoration = styled.span`
  width: 2px;
  height: 90%;
  margin: 2px;
  background: linear-gradient(180deg, #FFFFFC 0%, #F9FC72 100%);
`;

export const MenuItemTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color:#E5E5E0;
  text-transform: uppercase;
  margin: 0px 10px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-between;
  width: 100%;
  margin: 30px;
  height: auto;
  background-color: #0B0B0A;
  border: 1px solid #21211F;
  
  @media (max-width: 620px) {
    flex-flow: column wrap;
    align-items: flex-end;
  }
`;

export const Data = styled.li`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #6D6D68;
  margin: 5px 30px;
  line-break: anywhere;

  &:first-child{
    margin: 30px 0px 5px 30px;
  }

  &:last-child{
    margin: 5px 0px 30px 30px;
  }
`;

export const DataDiv = styled.div`
  color: #CFCFC9;
`;