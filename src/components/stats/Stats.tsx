import React from "react";
import styled from "styled-components";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

interface Props {
  positive: boolean;
  value: string;
}

const Stats: React.FC<Props> = ({ positive, value }) => {
  return (
    <StatsContainer positive={positive}>
      {positive ? (
        <ArrowUpwardOutlinedIcon className="arrow" />
      ) : (
        <ArrowDownwardOutlinedIcon className="arrow" />
      )}
      {value}
    </StatsContainer>
  );
};
const StatsContainer = styled.div<{ positive: boolean }>`
  ${(p) => (p.positive ? "color:green;" : "color: red;")}
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  .arrow {
    font-size: 24px;
  }
`;
export default Stats;
