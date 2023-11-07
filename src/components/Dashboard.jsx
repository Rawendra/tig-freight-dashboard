import { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import { fetchData } from "../communication/api";
import "./Dashboard.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function Dashboard() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      setRecords(data.data);
    });
  }, []);
  return (
    <div>
      <Heading size="md" fontSize="30px">
        COMPANY CO.
      </Heading>

      <div className="Dashboard-body">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Shipment</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {records?.shipments?.map((data, index) => (
                <Tr key={index}>
                  <Td>{data.trackingId}</Td>
                  <Td>
                    {" "}
                    <Button colorScheme="green" variant="outline">
                      {data.status}
                    </Button>{" "}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Dashboard;
