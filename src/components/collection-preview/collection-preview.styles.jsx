import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleStyles = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: bold;
`;

export const PreviewItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
