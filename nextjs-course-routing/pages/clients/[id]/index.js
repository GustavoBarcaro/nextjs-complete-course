import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: 1,
        clientprojectid: "projectA",
      },
    });
  };

  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>
        Load Project A
      </button>
    </div>
  );
};

export default ClientProjectsPage;
