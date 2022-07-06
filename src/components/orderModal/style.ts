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

  select,
  input {
    background-color: inherit;
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
