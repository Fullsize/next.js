import gqlClient from './client/gqlClient';
import { gql } from '@apollo/client';
export function gqlInit() {
	gqlClient.query({
		query: gql`
		query GetDogs {
    dogs {
      id
      breed
    }
  }
	`
	})
}