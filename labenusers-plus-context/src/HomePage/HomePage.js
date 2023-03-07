import { useContext } from "react";
import { UserCard } from "../components/Cards";
import { GlobalContext } from "../context/GlobalContext";

export function HomePage() {
  const context = useContext(GlobalContext);
  const { userList } = context;
  console.log(userList);

  return (
    <>
      <h1>Página única kkk</h1>
      {userList.map((user) => (
        <UserCard user={user} />
      ))}
    </>
  );
}
