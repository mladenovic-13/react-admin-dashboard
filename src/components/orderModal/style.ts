import styled from "styled-components";
import { Card } from "../../pages/list/style";
import { ITheme } from "../../shared/types";

export const Wrapper = styled(Card)`
  color: ${(p: ITheme) => p.theme.color[900]};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p: ITheme) => p.theme.color.background};
  padding: 40px;
  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 5px;
    background-color: ${(p: ITheme) => p.theme.color[900]};
    position: absolute;
    top: 16px;
    right: 20px;
    .closeIcon {
      color: ${(p: ITheme) => p.theme.color[100]};
    }
  }
`;
export const OrderForm = styled.form`
  width: 30%;

  select,
  input {
    color: ${(p: ITheme) => p.theme.color.textColor};
    background-color: ${(p: ITheme) => p.theme.color[200]};
    border: none;
    border-bottom: 1px solid ${(p: ITheme) => p.theme.color[800]};
    padding: 8px 10px;
    margin-bottom: 12px;
    font-size: 16px;
    outline: none;
  }
  .buttonWrapper {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  label {
    width: 100%;
  }
  .select {
    width: 100%;
  }
  .input {
    width: 30%;
  }
  .inputTitle {
    font-weight: 200;
  }
`;
