import { Puff } from "react-loader-spinner";
import { styled } from "styled-components";
const Center = styled.div`
  margin: 10rem auto;
`;
export const LoadingSpinner = () => {
  return (
    <Center>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="var(--color-brand-400)"
        ariaLabel="puff-loading"
        visible={true}
      />
    </Center>
  );
};
