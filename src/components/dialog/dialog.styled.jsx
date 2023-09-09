import styled from "styled-components";
import * as theme from "../../theme";

export const DialogContainer = styled.div`
  display: flex;
  padding-top: 40px;
  height: 85vh;
`;
export const AsideContainer = styled.div`
  text-align: center;
  width: 20%;
`;
export const ContentContainer = styled.div`
  margin-right: 0;
  border-radius: 20px 0 0 20px;
  width: 80%;
  background-color: #f9f9f9;
  padding: 10px;
`;
export const DialogListCont = styled.div`
  overflow-y: scroll;
  height: 85%;
  margin-bottom: 20px;
`;

export const Logo = styled.p`
  color: #000a10;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 70px;
`;
export const Typing = styled.p`
  position: absolute;
  left: 10%;
  color: #acadad;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 70px;
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000a10;
  font-size: 18px;
  font-weight: bold;
`;
export const Svg = styled.img``;
export const MessageBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: ${(props) =>
    props.isownmessage ? "end;" : "start;"}; /* Власні повідомлення справа */
`;

export const MessageBoxQue = styled.div`
  position: relative;
  background: #fee2c5;
  text-align: right;
  max-width: 65%;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #fee2c5;
  float: right;
  right: 20px;

  &::before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;

    border-left: 8px solid transparent;
    border-right: 8px solid #fee2c5;
    border-top: 8px solid #fee2c5;
    border-bottom: 8px solid transparent;

    right: 0px;
    bottom: -13px;
  }
`;
export const MessageBoxAns = styled.div`
  position: relative;
  background: #c4ddff;
  text-align: right;
  max-width: 65%;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #c4ddff;
  float: right;
  left: 20px;

  &::before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 8px solid #c4ddff;
    border-right: 8px solid transparent;
    border-top: 8px solid #c4ddff;
    border-bottom: 8px solid transparent;
    left: 0px;
    bottom: -13px;
  }
`;
export const FormStyled = styled.form`
  position: relative;
  padding-bottom: 0;
  margin-bottom: 20px;
  font-family: ${theme.FONTS.WEIGHTS.normal};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DialogInput = styled.input`
  display: block;
  width: 70%;
  height: 30px;
  border: 1px solid #acadad;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 12px 20px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${theme.COLORS.black};
  font-size: 16px;
  font-weight: bold;
  &::placeholder {
    color: #acadad;
  }
`;
export const Button = styled.button`
  width: 32px;
  background-color: transparent;
  border: none;
`;
