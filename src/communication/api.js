export const fetchData = () =>
  fetch("https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-token": "fe-test-2023",
    },
    body: JSON.stringify({
      query: `query  shipmentsQuery {
      shipments{
        trackingId,
        status
      }  
    }         
    `,
    }),
  }).then((response) => response.json());
