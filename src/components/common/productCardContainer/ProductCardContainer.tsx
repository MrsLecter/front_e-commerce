import { FC, ReactNode } from "react";
import { StyledProductCardContainer } from "./ProductCardContainer.styles";

interface Props {
  children: ReactNode;
}

const ProductCardContainer: FC<Props> = ({ children }) => {
  return <StyledProductCardContainer>{children}</StyledProductCardContainer>;
};

export default ProductCardContainer;
