import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
  const data = [
    { title: 'Title', text: 'Text', date: new Date() },
    { title: 'Title1', text: 'Text1', date: new Date() },
    { title: 'Title2', text: 'Text2', date: new Date() },
  ];

  return (
    <>
      <Button />

      {data.map((el, idx) => (
        <CardButton>
          <JournalItem key={idx} data={el} />
        </CardButton>
      ))}
    </>
  );
}

export default App;
