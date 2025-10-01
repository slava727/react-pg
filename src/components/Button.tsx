import Button from '@mui/material/Button';

export default function MyButton() {
  const handleClick = () => {
    console.log('Button clicked in child component!');
    // Perform other actions here
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Hello world
    </Button>
  );
}
