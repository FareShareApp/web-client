import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getUsersQuery = gql`
  {
    user(id: "5b7600d9690ede27ba7165a8") {
      firstName
      lastName
    }
  }
`;

const addRequest = gql`
  mutation($destination: String!, $timeBuffer: Int!) {
    addRequest(destination: $destination, timeBuffer: $timeBuffer) {
      destination
      timeBuffer
    }
  }
`;

const getRequests = gql`
  {
    requests {
      id
      destination
      timeBuffer
    }
  }
`;

export { getUsersQuery, addRequest, getRequests };
