import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";
import { getActors } from "../api/ApiActors";

const CardContainerStyles = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ActorCardContainer = () => {
  const { data: actors, isLoading } = useQuery({
    queryKey: ["actors"],
    queryFn: getActors,
  });

  if (isLoading) return <p>Loading...</p>;

  return <CardContainerStyles></CardContainerStyles>;
};
