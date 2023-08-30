import { FC } from "react";
import {
  BorderedSpan,
  ChHeader,
  ChRow,
  LoadingHeader,
  StyledChContainer,
} from "./Characteristics.styles";

interface Props {
  width: string;
  diameter: string;
  boltPattern: string;
  loading: boolean;
}

const Characteristics: FC<Props> = ({
  width,
  diameter,
  boltPattern,
  loading,
}) => {
  return (
    <StyledChContainer>
      {loading && <LoadingHeader />}
      {!loading && <ChHeader>Характеристики</ChHeader>}
      {!!width && (
        <ChRow color={"#e8ebed"}>
          {!loading && (
            <>
              <div>
                <span>Ширина обода (J)</span>
              </div>
              <div />
              <div>
                <span>{width}&rsquo;&rsquo;</span>
              </div>
            </>
          )}
        </ChRow>
      )}
      {!!diameter && (
        <ChRow color={" #fffefe"}>
          {!loading && (
            <>
              <div>
                <span>Диаметр обода (D)</span>
              </div>
              <div />
              <div>
                <span>{diameter}</span>
              </div>
            </>
          )}
        </ChRow>
      )}
      {!!boltPattern && (
        <ChRow color={"#e8ebed"}>
          {!loading && (
            <>
              <div>
                <span>Крепежные отверстия (PCD)</span>
              </div>
              <div />
              <div>
                {boltPattern.split("/").map((item, index) => {
                  return <BorderedSpan key={index}>{item}</BorderedSpan>;
                })}
              </div>
            </>
          )}
        </ChRow>
      )}
    </StyledChContainer>
  );
};

export default Characteristics;
