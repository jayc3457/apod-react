import DateContextWrapper from '../DateContextWrapper/DateContextWrapper';
import DateNavButton from '../DateNavButton/DateNavButton';
import ContentRenderer from '../ContentRenderer/ContentRenderer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Astrological Photo of the Day</h1>
      </header>
      <DateContextWrapper>
        <div className="App-content">
          <DateNavButton isBackward={true} />
          <ContentRenderer />
          <DateNavButton />
        </div>
      </DateContextWrapper>
    </div>
  );
}

export default App;
