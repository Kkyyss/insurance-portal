import PropTypes from "prop-types";

import { Avatar, Table } from "antd";
import { filterByCustomerFirstNameAndLastName } from "utils/data-filter";

import styled from "@emotion/styled";
import TextMasking from "components/TextMasking";

const columns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    render: data => <Avatar src={data} />
  },
  {
    title: "First Name",
    dataIndex: "first_name"
  },
  {
    title: "Last Name",
    dataIndex: "last_name"
  },
  {
    title: "Email",
    dataIndex: "email",
    render: data => <TextMasking text={data} show={false} />
  }
];

const Container = styled("div")`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 1024px;
  text-align: center;
`;

export function Customers(props) {
  const { data } = props;

  const { loading, customers } = data;

  const renderCustomers = () => {
    return (
      <Table
        title={() => <h3>Customers</h3>}
        columns={columns}
        dataSource={filterByCustomerFirstNameAndLastName(customers, "G", "W")}
        loading={loading}
        pagination={false}
        rowKey="id"
      />
    );
  };

  return <Container id="customersTable">{renderCustomers()}</Container>;
}

Customers.propTypes = {
  data: PropTypes.object,
  onGetCustomers: PropTypes.func
};

export default Customers;
