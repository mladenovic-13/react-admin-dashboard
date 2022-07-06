import styled from "styled-components";
import { Card } from "../../pages/list/style";
import { ITheme } from "../../shared/types";

export const Wrapper = styled(Card)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 40px;
  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    width: 36px;
    height: 36px;
    border-radius: 5px;
    background-color: ${(p: ITheme) => p.theme.color[900]};
    position: absolute;
    top: 16px;
    right: 20px;
    .closeIcon {
      color: white;
    }
  }
`;
export const OrderForm = styled.form`
  width: 30%;
  input,
  select {
    width: 100%;
  }
`;
