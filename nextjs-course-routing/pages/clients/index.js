import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    {
      id: 1,
      name: "Gustavo",
    },
    {
      id: 2,
      name: "Isa",
    },
    {
      id: 3,
      name: "Isa e Gustavo",
    },
  ];

  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map((each) => {
          return (
            <li key={each.id}>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: {
                    id: each.id,
                  },
                }}
              >
                {each.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientsPage;
