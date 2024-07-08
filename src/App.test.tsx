import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds and displays a new task', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter new task/i);
  const addButton = screen.getByText(/add task/i);

  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(addButton);

  expect(screen.getByText(/test task/i)).toBeInTheDocument();
});

test('toggles a task as completed', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter new task/i);
  const addButton = screen.getByText(/add task/i);

  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(addButton);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(screen.getByText(/test task/i)).toHaveStyle(
    'text-decoration: line-through'
  );
});

test('deletes a task', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter new task/i);
  const addButton = screen.getByText(/add task/i);

  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);

  expect(screen.queryByText(/test task/i)).not.toBeInTheDocument();
});
