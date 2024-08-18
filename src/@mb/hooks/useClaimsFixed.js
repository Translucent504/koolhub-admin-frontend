/**
 * The problem with the other useClaims hook is that it always returns [false] on the first use.
 * Also, if i pass in an array containing 5 claims that I want to check. and the user only has 2 of them. then the returned
 * result did not contain 5 elements . instead the returned result only contained the strings of the 2 claims that have passed. so it wasnt able to
 * be used like [claim1, claim2, claim3, claim4, claim5] = useClaims([claim1,claim2,claim3,claim4,claim5])
 * because in this case only claim1 and claim2 will have values and claim3 claim4 claim5 will be undefined.
 *
 * To fix that I have written this version, it does not use useEffect or useState so it returns the correct expected result on the first use.
 * it also returns an array of booleans and not strings. so if I pass in 5 claims, i will get an array with 5 booleans where each entry will correspond
 * to whether the user has that claim or not.
 *
 * It can now be used as :
 *  [claim1, claim2, claim3, claim4, claim5] = useClaims([claim1,claim2,claim3,claim4,claim5])
 * so if user has claims 2 and 3, then the returned array will be : [false, true, true, false, false]
 */

import { useSelector } from "react-redux";
import { utils } from "@mb";

const useClaimsFixed = (claims, ...rest) => {
  if (rest.length > 0) {
    console.error(
      "Incorrect Usage. Pass in multiple Claims as an Array. const [a,b] = useClaimsFixed([Claim1, Claim2])"
    );
  }
  const userClaims = useSelector(({ auth }) => auth.userClaims);

  if (utils.isEmpty(claims)) return [false];

  const rights = Array.isArray(claims)
    ? claims.map((c) => userClaims.includes(c))
    : [userClaims.includes(claims)];

  return rights;
};

export default useClaimsFixed;
