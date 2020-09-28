import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent } from './utils';
import '@testing-library/jest-dom/extend-expect';
import store from '../store';
import App from '../App';

const server = setupServer(
  rest.get('https://api.github.com/search/users', (request, response, context) => {
    const pages = {
      1: [
        {
          id: 1,
          login: 'sara',
          repos_url: 'https://api.github.com/users/sara/repos',
        },
        {
          id: 2,
          login: 'SaraVieira',
          repos_url: 'https://api.github.com/users/SaraVieira/repos',
        },
        {
          id: 3,
          login: 'sara8086',
          repos_url: 'https://api.github.com/users/sara8086/repos',
        },
      ],
    };

    return response(context.json({ items: pages[request.url.searchParams.get('page')] }));
  }),
  rest.get('https://api.github.com/users/sara/repos', (_, response, context) =>
    response(
      context.json([
        {
          id: 1,
          name: 'CapitalOne-Two-Three',
          description: 'Educational finance webapp for kids',
          stargazers_count: 10,
          html_url: 'https://github.com/sara/CapitalOne-Two-Three',
        },
        {
          id: 2,
          name: 'Reop 2',
          description: 'Description reop 2',
          stargazers_count: 0,
          html_url: 'https://github.com/sara/repo-2',
        },
        {
          id: 3,
          name: 'Reop 3',
          description: 'Description reop 3',
          stargazers_count: 1,
          html_url: 'https://github.com/sara/repo-3',
        },
        {
          id: 4,
          name: 'Reop 4',
          description: 'Description reop 4',
          stargazers_count: 2,
          html_url: 'https://github.com/sara/repo-4',
        },
        {
          id: 5,
          name: 'Reop 5',
          description: 'Description reop 5',
          stargazers_count: 3,
          html_url: 'https://github.com/sara/repo-5',
        },
        {
          id: 6,
          name: 'Reop 6',
          description: 'Description reop 6',
          stargazers_count: 4,
          html_url: 'https://github.com/sara/repo-6',
        },
      ])
    )
  ),
  rest.get('https://api.github.com/users/SaraVieira/repos', (_, response, context) => response(context.json([])))
);

test('The flow works', async () => {
  // Start server
  server.listen();

  // Render the app
  const { container, getByText, findByText, getByPlaceholderText, getByTestId } = render(<App />);

  // Title should be visible from the start
  expect(getByText('GitHub repositories explorer')).toBeVisible();

  // Type "sara" into the text field
  fireEvent.change(getByPlaceholderText('Enter username'), { target: { value: 'sara' } });

  // Click the "Search" button
  fireEvent.click(getByText('Search'));
  expect(getByTestId('loader')).toBeVisible();

  // Info label should appear after we get 'getGithubUsers' API response
  expect(await findByText('Showing users for "sara"')).toBeVisible();
  expect(store.getState().searchedName).toEqual('sara');
  expect(store.getState().githubAccounts).toHaveLength(3);

  // These three users should be visible
  expect(getByText('sara')).toBeVisible();
  expect(getByText('SaraVieira')).toBeVisible();
  expect(getByText('sara8086')).toBeVisible();

  // Click on the first user
  fireEvent.click(getByText('sara'));
  expect(getByTestId('loader')).toBeVisible();

  // Repository info should appear after we get 'getUserRepos' API response
  expect(await findByText('CapitalOne-Two-Three')).toBeVisible();
  expect(await findByText('Reop 2')).toBeVisible();
  expect(await findByText('Reop 3')).toBeVisible();
  expect(await findByText('Reop 4')).toBeVisible();
  expect(await findByText('Reop 5')).toBeVisible();
  expect(store.getState().userRepos.sara).toHaveLength(6);

  // Click 'Show more' to display more user repos
  fireEvent.click(getByText('Show more'));
  expect(await findByText('Reop 6')).toBeVisible();

  // Click on the first user
  fireEvent.click(getByText('SaraVieira'));
  expect(getByTestId('loader')).toBeVisible();
  expect(await findByText(`SaraVieira doesn't have any repositories`)).toBeVisible();

  // Make sure the UI didn't change
  expect(container).toMatchSnapshot();

  // Stop server
  server.resetHandlers();
  server.close();
});
