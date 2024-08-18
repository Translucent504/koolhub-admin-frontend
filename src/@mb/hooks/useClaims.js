import { utils } from "@mb";

const useClaims = (claims, ...rest) => {
  if (rest.length > 0) {
    console.error(
      "Incorrect Usage. Pass in multiple Claims as an Array. const [a,b] = useClaims([Claim1, Claim2])"
    );
  }
  //   const userClaims = useSelector(({ auth }) => auth.userClaims);
  const userClaims = [];

  if (utils.isEmpty(claims)) return [false];

  const rights = Array.isArray(claims)
    ? claims.map((c) => userClaims.includes(c))
    : [userClaims.includes(claims)];

  return rights;
};

export default useClaims;
