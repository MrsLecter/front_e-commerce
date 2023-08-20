import BlueBtn from "@/components/common/buttons/blueBtn/BlueBtn";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { styled } from "styled-components";

const NotFound: FC = () => {
  const router = useRouter();

  const goHomeHandler = () => {
    router.push("/");
  };
  return (
    <StyledContent>
      <div>
        <p>404</p>
        <h1>Opps! This page could not be found</h1>
        <h3>The page you were looking for does not exist</h3>
        <BlueBtn color="dark" label="Go home" clickHandler={goHomeHandler} />
      </div>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-roboto);
  transform: translateY(80%);

  div {
    width: 300px;
    & > p {
      margin: 8px 0;
      font-size: 42px;
      font-weight: 500;
      color: #3f5c7c;
    }
  }
`;

export default NotFound;
