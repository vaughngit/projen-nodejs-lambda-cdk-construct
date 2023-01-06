export const handler = async(event) => {
  // TODO implement
  console.log('Event: ', event);
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
