# My React Hooks

A collection of custom React hooks for fetching data from APIs.

## Installation

To install the package, run the following command:

```bash
npm install @rohitnirban/apihooks
```

## Hooks

### `useGetApi`

A custom hook for making GET requests to an API endpoint.

#### Usage

```javascript
import useGetApi from '@rohitnirban/apihooks';

const { isLoading, error, data } = useGetApi('/api/endpoint');
```

### `usePostApi`

A custom hook for making POST requests to an API endpoint.

#### Usage

```javascript
import usePostApi from '@rohitnirban/apihooks';

const { isLoading, error, data, setData } = usePostApi('/api/endpoint');
```

## Examples

### Using `useGetApi`

```javascript
const { isLoading, error, data } = useGetApi('/api/get');

if (isLoading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error: {error}</p>;
}

return <p>Data: {data}</p>;
```

### Using `usePostApi`

```javascript
const { isLoading, error, data, setData } = usePostApi('/api/post');

const handleSubmit = (formData) => {
  setData(formData);
};

if (isLoading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error: {error}</p>;
}

return (
  <form onSubmit={handleSubmit}>
    {/* Form fields */}
  </form>
);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.